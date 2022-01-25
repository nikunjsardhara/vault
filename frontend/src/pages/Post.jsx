import React from "react";

import CrudModule from "@/modules/CrudModule";
import PostForm from "@/forms/PostForm";

function Post() {
  const entity = "post";
  const searchConfig = {
    displayLabels: ["title", "desc", "tags"],
    searchFields: "title,desc,tags",
    outputValue: "_id",
  };

  const panelTitle = "Posts";
  const dataTableTitle = "Posts";
  const entityDisplayLabels = ["title"];

  const readColumns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "desc",
    },
    {
      title: "Media",
      dataIndex: "media_url",
      type: 'imagelist'
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Views",
      dataIndex: "views",
    },
    {
      title: "Tags",
      dataIndex: "tags",
    },
  ];
  const dataTableColumns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "desc",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Views",
      dataIndex: "views",
    },
    {
      title: "Tags",
      dataIndex: "tags",
    },
  ];

  const ADD_NEW_ENTITY = "Add new Post";
  const DATATABLE_TITLE = "Posts List";
  const ENTITY_NAME = "Post";
  const CREATE_ENTITY = "Create Post";
  const UPDATE_ENTITY = "Update Post";
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
      createForm={<PostForm />}
      updateForm={<PostForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Post;
