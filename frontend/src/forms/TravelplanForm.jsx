import React from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { getStatesOfCountry } from "country-state-city/dist/lib/state";
import axios from "axios";
import { ACCESS_TOKEN_NAME } from "@/config/serverApiConfig";
import { token as tokenCookies } from "@/auth";

export default function TravelplanForm({ isUpdateForm = false }) {
  const [selected, setSelected] = React.useState([]);
  const [states, setStates] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [selectedState, setSelectedState] = React.useState(null);
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const Country = require("country-state-city").Country;
  const allCountries = Country.getAllCountries();
  const country_options = allCountries.map((country) => {
    return { label: country.name, value: country.name };
  });
  const { TextArea } = Input;

  function handleChange(value) {
    if (value) {
      let country = allCountries.filter((country) => country.name === value);
      setSelected(country[0].name);
      let newStates = getStatesOfCountry(country[0].isoCode);

      if (newStates.length === 0) {
        setStates([{ label: country[0].name, value: country[0].name }]);
      } else {
        setStates(
          newStates.map((state) => {
            return { label: state.name, value: state.name };
          })
        );
      }
    }
  }

  function handleUserSearch(username) {
    const headersInstance = { [ACCESS_TOKEN_NAME]: tokenCookies.get() };
    axios
      .get("http://localhost/api/profile/search", {
        params: { fields: "username", q: username },
        headers: { ...headersInstance },
      })
      .then((res) => {
        if (res?.data?.success) {
          const fromattedOptions = res?.data?.result?.map((user) => {
            return { label: user.username, value: user._id };
          });
          setUsers(fromattedOptions);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleDate(e) {
    console.log(e.target.value);
  }

  // console.log(selectedState);

  return (
    <>
      <Form.Item
        label="Select User"
        name="user_id"
        rules={[
          {
            required: true,
            message: "Please select the user for travelplan!",
          },
        ]}
      >
        <Select
          placeholder="Select User"
          showSearch
          onSearch={handleUserSearch}
          filterOption
          optionFilterProp="label"
          loading={loading}
          options={users}
        />
      </Form.Item>
      <Form.Item
        label="Select Country"
        name="tto_country"
        rules={[
          {
            required: true,
            message: "Please select country!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Select
          placeholder="Select Country"
          filterOption={true}
          showSearch={true}
          optionFilterProp="label"
          value={selected}
          options={country_options}
          onChange={(e) => handleChange(e)}
        />
      </Form.Item>
      <Form.Item
        label="Select State"
        name="tto_state"
        rules={[
          {
            required: true,
            message: "Please select state!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Select
          placeholder="Select State"
          filterOption={true}
          showSearch={true}
          optionFilterProp="value"
          // options={states}
        >
          {states.map((state) => (
            <Select.Option key={state.value} value={state.value}>
              {state.value}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Place Visiting"
        name="tto_place"
        rules={[
          {
            required: true,
            message: "Please input place you are visiting!",
          },
        ]}
      >
        <Input placeholder="Place you are going to visit..." />
      </Form.Item>
      <Form.Item
        label="From Date"
        name="dot_from"
        rules={[
          {
            required: true,
            message: "Please input travel from date!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Input
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        {/* <DatePicker
          value={fromDate}
          disabledDate={(current) =>
            current.isBefore(new Date().toISOString().slice(0, 10))
          }
          style={{ width: "100%" }}
          format="YYYY-MM-DD"
          onChange={(value) => setFromDate(value)}
        /> */}
      </Form.Item>
      <Form.Item
        label="To Date"
        name="dot_to"
        rules={[
          {
            required: true,
            message: "Please input travel to date!",
          },
        ]}
        style={{
          display: "inline-block",
          width: "calc(50%)",
          paddingLeft: "5px",
        }}
      >
        <Input
          type="date"
          min={
            fromDate
              ? new Date(fromDate).toISOString().slice(0, 10)
              : new Date().toISOString().slice(0, 10)
          }
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        {/* <DatePicker
          value={toDate}
          onChange={(value) => setToDate(value)}
          disabledDate={(current) => {
            if (fromDate) {
              if (fromDate > new Date()) {
                return current.isBefore(fromDate);
              } else {
                return current.isBefore(new Date().toISOString().slice(0, 10));
              }
            } else {
              return current.isBefore(new Date().toISOString().slice(0, 10));
            }
          }}
          style={{ width: "100%" }}
        /> */}
      </Form.Item>

      <Form.Item
        name="activity"
        label="Activity"
        rules={[
          {
            required: true,
            message: "Please input activities!",
          },
        ]}
      >
        <Input placeholder="Add comma seperated activity like Beach, Surfing, ..." />
      </Form.Item>
      <Form.Item
        name="overview"
        label="Overview"
        rules={[
          {
            min: 5,
            max: 1200,
          },
          {
            required: true,
            message: "Please add overview of your travelplan!",
          },
        ]}
      >
        <TextArea placeholder="Describe Your Travel Plan" rows={4} />
      </Form.Item>
    </>
  );
}
