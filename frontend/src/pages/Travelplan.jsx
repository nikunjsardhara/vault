import React from "react";

import CrudModule from "@/modules/CrudModule";
import TravelplanForm from "@/forms/TravelplanForm";

function Travelplan() {
  const entity = "travelplans";
  const searchConfig = {
    displayLabels: ["client"],
    searchFields: "tto_country,tto_state,activity",
    outputValue: "_id",
  };

  const panelTitle = "Travelplan Panel";
  const dataTableTitle = "Travelplans Lists";
  const entityDisplayLabels = ["client"];

  const readColumns = [
    {
      title: "User Id",
      dataIndex: "user_id",
    },
    {
      title: "Country",
      dataIndex: "tto_country",
    },
    {
      title: "State",
      dataIndex: "tto_state",
    },
    {
      title: "Place Visiting",
      dataIndex: "tto_place",
    },
    {
      title: "From-Date",
      dataIndex: "dot_from",
    },
    {
      title: "To-Date",
      dataIndex: "dot_to",
    },
    {
      title: "Activity",
      dataIndex: "activity",
    },
    {
      title: "Overview",
      dataIndex: "overview",
    },
    {
      title: "Is Deleted",
      dataIndex: "isDeleted",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
  ];
  const dataTableColumns = [
    {
      title: "User_id",
      dataIndex: "user_id",
    },
    {
      title: "Country",
      dataIndex: "tto_country",
    },
    {
      title: "State",
      dataIndex: "tto_state",
    },
    {
      title: "Place Visiting",
      dataIndex: "tto_place",
    },
    {
      title: "From-Date",
      dataIndex: "dot_from",
      render: dot_from => dot_from && new Date(dot_from).toISOString().slice(0,10)
    },
    {
      title: "To-Date",
      dataIndex: "dot_to",
      render: dot_to => dot_to && new Date(dot_to).toISOString().slice(0,10)
    },
    {
      title: "Activity",
      dataIndex: "activity",
    },
  ];

  const ADD_NEW_ENTITY = "Add new Travelplan";
  const DATATABLE_TITLE = "Travelplans List";
  const ENTITY_NAME = "Travelplan";
  const CREATE_ENTITY = "Create Travelplan";
  const UPDATE_ENTITY = "Update Travelplan";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<TravelplanForm />}
      updateForm={<TravelplanForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Travelplan;
