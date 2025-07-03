import DataTable from "@/components/ui/DataTable";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Key, ReactNode, useCallback } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { COLUMN_LISTS_CATEGORY } from "./Category.constans";
import { LIMIT_LISTS } from "@/constants/list.constants";

type Props = {};

const Category = (props: Props) => {
  const { push } = useRouter();
  const renderCell = useCallback(
    (category: Record<string, unknown>, columkey: Key) => {
      const cellValue = category[columkey as keyof typeof category];

      switch (columkey) {
        case "icon":
          return (
            <Image src={`${cellValue}`} alt="icon" width={100} height={200} />
          );
        case "actions":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <CiMenuKebab className="text-default-700" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key="detail-category-button"
                  onPress={() => push(`/admin/category/${category._id}`)}
                >
                  Detail Category
                </DropdownItem>
                <DropdownItem key="delete-category" className="text-danger-500">
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          );
        default:
          return cellValue as ReactNode;
      }
    },
    [],
  );
  return (
    <section>
      <DataTable
        buttonTopContentLabel="Create Category"
        columns={COLUMN_LISTS_CATEGORY}
        currentPage={1}
        data={[
          {
            _id: "123",
            name: "Category 1",
            description: "Description 1",
            icon: "/images/general/logo.png",
          },
        ]}
        emptyContent="Category is empty"
        limit={LIMIT_LISTS[0].label}
        onChangeLimit={() => {}}
        onChangePage={() => {}}
        onChangeSearch={() => {}}
        onClearSearch={() => {}}
        onClickButtonTopContent={() => {}}
        renderCell={renderCell}
        totalPages={2}
      />
    </section>
  );
};

export default Category;
