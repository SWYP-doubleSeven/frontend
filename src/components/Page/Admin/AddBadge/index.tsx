"use client";

import classNames from "classnames/bind";
import { useState } from "react";
import { useForm } from "react-hook-form";

const cn = classNames.bind(styles);

import styles from "./addBadge.module.scss";

interface FormInputs {
  image: FileList;
  name: string;
  condition: string;
  type: string;
  category: string;
  operator: "<=" | ">=" | "==";
  value: string;
  visibility: "Y" | "N";
}

export default function AddBadge() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    reset();
    setPreviewImage(null);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={cn("form")}>
        {/* 이미지 넣는 인풋 */}
        <div className={cn("inputGroup")}>
          <label>이미지</label>
          <div className={cn("imageUploadContainer")}>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange}
              className={cn("imageInput")}
            />
            {previewImage && (
              <div className={cn("imagePreview")}>
                <img src={previewImage} alt="Preview" />
              </div>
            )}
          </div>
        </div>

        {/* 이름 */}
        <div className={cn("inputGroup")}>
          <label>이름</label>
          <input
            type="text"
            {...register("name", { required: "이름을 입력하세요" })}
          />
          {errors.name && <p className={cn("error")}>{errors.name.message}</p>}
        </div>

        {/* 달성 조건 */}
        <div className={cn("inputGroup")}>
          <label>달성 조건</label>
          <input
            type="text"
            {...register("condition", { required: "달성 조건을 입력하세요" })}
          />
          {errors.condition && (
            <p className={cn("error")}>{errors.condition.message}</p>
          )}
        </div>

        {/* 타입 */}
        <div className={cn("inputGroup")}>
          <label>타입</label>
          <select {...register("type", { required: "타입을 선택하세요" })}>
            <option value="">타입 선택</option>
            <option value="type1">타입 1</option>
            <option value="type2">타입 2</option>
            <option value="type3">타입 3</option>
          </select>
          {errors.type && <p className={cn("error")}>{errors.type.message}</p>}
        </div>

        {/* 카테고리 */}
        <div className={cn("inputGroup")}>
          <label>카테고리</label>
          <select
            {...register("category", { required: "카테고리를 선택하세요" })}
          >
            <option value="">카테고리 선택</option>
            <option value="category1">카테고리 1</option>
            <option value="category2">카테고리 2</option>
            <option value="category3">카테고리 3</option>
          </select>
          {errors.category && (
            <p className={cn("error")}>{errors.category.message}</p>
          )}
        </div>

        {/* 연산자 */}
        <div className={cn("inputGroup")}>
          <label>연산자</label>
          <div className={cn("radioGroup")}>
            <label>
              <input
                type="radio"
                value="<="
                {...register("operator", { required: "연산자를 선택하세요" })}
              />
              &lt;=
            </label>
            <label>
              <input
                type="radio"
                value=">="
                {...register("operator", { required: "연산자를 선택하세요" })}
              />
              &gt;=
            </label>
            <label>
              <input
                type="radio"
                value="=="
                {...register("operator", { required: "연산자를 선택하세요" })}
              />
              ==
            </label>
          </div>
          {errors.operator && (
            <p className={cn("error")}>{errors.operator.message}</p>
          )}
        </div>

        {/* 값 */}
        <div className={cn("inputGroup")}>
          <label>값</label>
          <input
            type="text"
            {...register("value", { required: "값을 입력하세요" })}
          />
          {errors.value && (
            <p className={cn("error")}>{errors.value.message}</p>
          )}
        </div>

        {/* 노출 */}
        <div className={cn("inputGroup")}>
          <label>노출</label>
          <div className={cn("radioGroup")}>
            <label>
              <input
                type="radio"
                value="Y"
                {...register("visibility", { required: "노출을 선택하세요" })}
              />
              Y
            </label>
            <label>
              <input
                type="radio"
                value="N"
                {...register("visibility", { required: "노출을 선택하세요" })}
              />
              N
            </label>
          </div>
          {errors.visibility && (
            <p className={cn("error")}>{errors.visibility.message}</p>
          )}
        </div>

        {/* 버튼들 */}
        <div className={cn("buttonGroup")}>
          <button
            type="button"
            onClick={handleDelete}
            className={cn("deleteButton")}
          >
            삭제
          </button>
          <button type="submit" className={cn("submitButton")}>
            저장
          </button>
        </div>
      </form>

      {/* 삭제 확인 모달 */}
      {isModalOpen && (
        <div className={cn("modalOverlay")}>
          <div className={cn("modal")}>
            <p className={cn("modalText")}>배지를 삭제하시겠습니까?</p>
            <div className={cn("modalButtons")}>
              <button
                onClick={handleCancelDelete}
                className={cn("modalButton", "cancelButton")}
              >
                아니오
              </button>
              <button
                onClick={handleConfirmDelete}
                className={cn("modalButton", "confirmButton")}
              >
                네
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
