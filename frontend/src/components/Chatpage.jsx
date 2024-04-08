import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input, Heading, Button } from "/Users/ushachandrashekar/Desktop/eventique/frontend/src/Styling";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import axios from 'axios';
import moment from 'moment';

//import Sidebar from '/Users/ushachandrashekar/Desktop/eventique/frontend/src/components/Sidebar.jsx';
import Navbar from './Navbar';

import { apiEndpoints } from '../utils/apiEndpoints';

export default function HomeEventiquechatdisplayPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [inputText, setInputText] = useState("");

  function collapseSidebar() {
      setCollapsed(!collapsed)
  }
  // Function to handle input text change
  const handleInputChange = (event) => {
    // console.log(event);
    setInputText(event.target.value);
  };

  // Function to handle generate plan button click
  const handleGeneratePlan = () => {
    // Make API call to 'generate-plan' endpoint with inputText
    fetch("api/chatbot/generate-plan/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response here (if needed)
        console.log("API Response:", data);
        React.setApiResponse(data);
        // Clear input field after successful submission 
        setInputText("");
      })
      .catch((error) => {
        console.error("API Error:", error);
        // just write on console for now
      });
  };

  return (
    <>
      <Helmet>
        <title>create event</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet> 
      <div className="flex md:flex-col justify-between items-start w-full gap-5 p-[9px] bg-white-A700 shadow-xs">
        <Sidebar
          width="285px !important"
          collapsedWidth="80px !important"
          collapsed={collapsed}
          className="flex flex-col h-screen ml-[7px] top-0 py-5 md:p-5 md:ml-0 bg-gray-100 !sticky overflow-auto rounded-[24px] md:hidden"
        >
          <div className="flex justify-between items-center w-[86%] md:w-full gap-5">
            <div className="flex items-center gap-2">
              <Img src="images/img_group.svg" alt="image" className="h-[31px]" />
              <Heading size="s" as="h5" className="self-end !text-black-900">
                Event log
              </Heading>
            </div>
            <Img src="images/img_icon_button_5.svg" alt="iconbuttonfive" className="h-[36px] w-[36px] rounded-[12px]" />
          </div>
          <Button
            shape="round"
            leftIcon={<Img src="images/img_e_add.svg" alt="E add" />}
            className="mt-[21px] gap-1.5 sm:px-5 min-w-[243px]"
          >
            New chat
          </Button>
          <Text
            size="s"
            as="p"
            className="self-start mt-[30px] ml-5 md:ml-0 !text-gray-900_7e !font-outfit opacity-0.4"
          >
            Today
          </Text>
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 10px 10px 35px",
                gap: "8px",
                color: "#565e6c",
                fontWeight: 400,
                fontSize: "14px",
                borderRadius: "12px",
              },
            }}
            className="self-stretch w-full mt-5 pb-[9px]"
          >
            <div className="flex flex-col gap-[0.02px]">
              <MenuItem icon={<Img src="images/img_comments.svg" alt="comments_one" className="h-[18px] w-[18px]" />}>
                Helpful AI Ready
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_lightbulb_filament.svg" alt="lightbulb_one" className="h-[18px] w-[18px]" />}
              >
                dxxd Effect Expla...
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_film_strip.svg" alt="filmstrip_one" className="h-[18px] w-[18px]" />}
              >
                Movie Streaming Help
              </MenuItem>
            </div>
            <div className="flex flex-col items-start pt-[7px]">
              <Text size="s" as="p" className="ml-5 md:ml-0 !text-gray-900_7e !font-outfit opacity-0.4">
                Previous 7 days
              </Text>
              <MenuItem icon={<Img src="images/img_comments.svg" alt="comments_three" className="h-[18px] w-[18px]" />}>
                Web Design Workflow
              </MenuItem>
              <MenuItem icon={<Img src="images/img_comments.svg" alt="comments_five" className="h-[18px] w-[18px]" />}>
                List of event requirements
              </MenuItem>
              <MenuItem
                icon={<Img src="images/img_globe_hemisphere.svg" alt="globe_one" className="h-[18px] w-[18px]" />}
              >
                Weather Dynamics
              </MenuItem>
            </div>
          </Menu>
          {!collapsed ? (
            <div className="flex flex-col w-[86%] md:w-full mt-[274px] gap-3.5 p-4 border-deep_purple-100 border border-solid bg-white-A700 rounded-[12px]">
              <div className="flex justify-between mt-[3px] gap-5">
                <div className="flex justify-center items-center w-[41%] gap-[11px]">
                  <Img src="images/img_rectangle.png" alt="circleimage" className="h-[36px] w-[36px] rounded-[50%]" />
                  <Heading size="xs" as="p" className="self-end mb-1.5">
                    Emily
                  </Heading>
                </div>
                <Img
                  src="images/img_icon_button_6.svg"
                  alt="iconbuttonsix"
                  className="h-[36px] w-[36px] rounded-[12px]"
                />
              </div>
              <Button
                color="gray_100"
                size="xs"
                rightIcon={<Img src="images/img_arrowright.svg" alt="arrow_right" />}
                className="w-full mb-1 gap-[3px] sm:px-5 rounded-[9px]"
              >
                Upgrade to Pro
              </Button>
            </div>
          ) : null}
        </Sidebar>
        <div className="flex flex-col self-end items-center w-[64%] md:w-full mb-[27px] mr-[161px] md:mr-0">
          <div className="flex flex-col items-center w-[81%] md:w-full gap-[38px]">
            <Heading as="h1">Go Ahead plan your event!</Heading>
            <div className="flex flex-col self-stretch gap-4">
              <div className="flex sm:flex-col items-center gap-[13px] p-1.5 border-gray-100_01 border border-solid bg-white-A700 flex-1 cursor-pointer rounded-[12px] hover:border-indigo-A100 hover:border hover:border-solid hover:shadow-md">
                <Img src="images/img_container_21.svg" alt="image" className="h-[60px] sm:w-full rounded-[9px]" />
                <Text size="lg" as="p" className="self-end mb-[15px] !text-gray-900">
                  tell me a plan for a offiice party ?
                </Text>
              </div>
              <div className="flex sm:flex-col justify-between items-center gap-5 p-1.5 border-gray-100_01 border border-solid bg-white-A700 shadow-md flex-1 cursor-pointer rounded-[12px] hover:border-indigo-A100 hover:border hover:border-solid hover:shadow-md">
                <div className="flex sm:flex-col justify-center items-center w-[83%] sm:w-full gap-[13px]">
                <Img
                   src="images/img_container_23.svg"
                  alt="image"
                  className="h-[60px] sm:w-full rounded-[9px] ml-[-10px]" 
    /> 
                   
          
                  <Text size="lg" as="p" className="self-end mb-[15px] !text-gray-900">
                    create a roadmap to host a small formal meetup&quot;
                  </Text>
                </div>
                <Img
                  src="images/img_arrow_down.svg"
                  alt="arrowdown_one"
                  className="h-[24px] w-[24px] sm:w-full mr-3.5 md:mr-0"
                />
              </div>
              <div className="flex sm:flex-col items-center gap-[13px] p-1.5 border-gray-100_01 border border-solid bg-white-A700 flex-1 cursor-pointer rounded-[12px] hover:border-indigo-A100 hover:border hover:border-solid hover:shadow-md">
                <Img src="images/img_container_21.svg" alt="close_one" className="h-[60px] sm:w-full rounded-[9px]" />
                <Text size="lg" as="p" className="self-end mb-[15px] !text-gray-900">
                  How can I effectively organize a corporate event?&quot;
                </Text>
              </div>
              <div className="flex items-center gap-[13px] p-1.5 border-gray-100_01 border border-solid bg-white-A700 flex-1 cursor-pointer rounded-[12px] hover:border-indigo-A100 hover:border hover:border-solid hover:shadow-md">
                <Img src="images/img_container_27.svg" alt="containertwenty" className="h-[60px] rounded-[9px]" />
                <Text size="lg" as="p" className="self-end mb-[15px] !text-gray-900">
                  Plans for a birthday bash
                </Text>
              </div>
              <div className="flex sm:flex-col justify-center items-center gap-[13px] p-1.5 border-gray-100_01 border border-solid bg-white-A700 flex-1 cursor-pointer rounded-[12px] hover:border-indigo-A100 hover:border hover:border-solid hover:shadow-md">
                <Img src="images/img_close_lime_50.svg" alt="close_one" className="h-[60px] sm:w-full rounded-[9px]" />
                <Text size="lg" as="p" className="self-end mb-[15px] !text-gray-900">
                  &quot;My pet turns one give me a plan to host a small party&quot;{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-[148px] bg-lime-A700 shadow-sm rounded-[12px]">
            <div className="flex md:flex-col justify-center items-center gap-3 p-2.5 border-lime-A700 border border-solid bg-white-A700 rounded-[12px]">
              <Input shape="square" name="grouptwelve" placeholder={`Enter details for the event you want to plan.`}
              value={inputText}
              onChange={handleInputChange} />
              <Img src="images/img_microphone.svg" alt="microphone_one" className="h-[24px] w-[24px] md:w-full" />
              <Img src="images/img_paper_plane_tilt.svg" alt="paperplane_one" className="h-[24px] w-[24px] md:w-full"onClick={handleGeneratePlan} />
            </div>
          </div>
          <Text size="xs" as="p" className="flex mt-[23px] !text-blue_gray-200 text-center">
            <span className="text-gray-700">
              click to know more.
            </span>
            <a href="#" className="text-lime-A700 font-normal underline">
              Privacy Notice
            </a>
          </Text>
        </div>
      </div>
    </>
  );
}
