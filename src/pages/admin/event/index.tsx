import DashboardLayout from "@/components/layouts/DashboardLayout/DasboardLayout";
import Category from "@/components/views/Admin/Category";
import Event from "@/components/views/Admin/Event";
import React from "react";

type Props = {};

const AdminEventPage = (props: Props) => {
  return (
    <DashboardLayout
      title="Event"
      description="List of all event, create new event, and menage exinsting event"
      type="admin"
    >
      <Event />
    </DashboardLayout>
  );
};

export default AdminEventPage;
