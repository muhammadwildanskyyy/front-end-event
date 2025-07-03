import DashboardLayout from "@/components/layouts/DashboardLayout/DasboardLayout";
import Category from "@/components/views/Admin/Category";
import React from "react";

type Props = {};

const AdminCategoryPage = (props: Props) => {
  return (
    <DashboardLayout
      title="Category"
      description="List of all categories, create new category, and menage exinsting categories"
      type="admin"
    >
      <Category />
    </DashboardLayout>
  );
};

export default AdminCategoryPage;
