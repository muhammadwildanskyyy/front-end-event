import DashboardLayout from "@/components/layouts/DashboardLayout/DasboardLayout";
import DetailCategory from "@/components/views/Admin/DetailCategory";
import React from "react";

type Props = {};

const AdminDetailCategoryPage = (props: Props) => {
  return (
    <DashboardLayout
      title="Detail Category"
      description="Manage information for this category"
      type="admin"
    >
      <DetailCategory />
    </DashboardLayout>
  );
};

export default AdminDetailCategoryPage;
