import classNames from "classnames/bind";
import styles from "./listView.module.scss";
import Card from "../Card";
import { formatToKoreanCurrency } from "@/constants/formattedAmount";
import { groupByDate } from "@/constants/date";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { getVirtualItemList } from "@/lib/apis/virtualItems";
import { useAtom } from "jotai";
import { listEditState } from "@/lib/atoms/list";
import DeleteSaveButton from "../DeleteSaveButton";

const cn = classNames.bind(styles);

export default function Listview() {
  const [listData, setListData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEdit] = useAtom(listEditState);

  const fetchData = useCallback(async () => {
    try {
      const currentDate = new Date();
      const data = await getVirtualItemList(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1
      );
      setListData(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>...</div>;
  }

  if (!listData) {
    return <div>Error loading data</div>;
  }

  const groupedItems = groupByDate(listData);

  return (
    <div className={cn("listWrap")}>
      <div className={cn("saveMoney")}>
        <span>이번 달 지킨 돈</span>
        <span>{formatToKoreanCurrency(listData.totalAmount)}원</span>
      </div>
      <div className={cn("cardWrap")}>
        {isEdit && <DeleteSaveButton onDelete={fetchData} />}
        {groupedItems.map((group, index) => (
          <div key={group.label} className={cn({ firstGroup: index === 0 })}>
            <div className={cn("date")}>{group.label}</div>
            {group.items.map((item) => (
              <Card
                key={item.savingId}
                id={item.savingId}
                category={item.categoryName}
                amount={item.amount}
                date={item.savingYmd}
                time={item.savingTime}
                onDelete={fetchData}
              />
            ))}
          </div>
        ))}
      </div>
      {(!listData.dailyGroups || listData.dailyGroups.length === 0) && (
        <div className={cn("empty")}>
          <Image
            src="/icons/ic-logo.svg"
            alt="로고 이미지"
            width={74}
            height={74}
          />
          <div className={cn("emptyState")}>아직 지킨 돈이 없어요</div>
        </div>
      )}
    </div>
  );
}
