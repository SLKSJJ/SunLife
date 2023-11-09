import React from "react";
import Ico_Facebook from "../assets/Icons/Ico_facebook";
import Ico_Instagram from "../assets/Icons/Ico_instagram";
import Ico_Twitter from "../assets/Icons/Ico_twitter";
import { fadein } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Main() {
  return (
    <Flex
      dir={"column"}
      justify="around"
      css={{
        width: "100%",
        height: "100%",
        opacity: "0",
        animation: `1s ease-in 1s 1 both ${fadein}`,
      }}
    >
      <Text
        css={{
          display1: "800",
          paddingTop: "$7",
          "@bp2": {
            display2: "800",
          },
          "@bp4": {
            display3: "800",
          },
          "@bp5": {
            headline1: "800",
          },
        }}
      >
        Web Conferencing <br></br>
      </Text>

      <Text
        css={{
          paddingTop: "$3",
          subhead1: "500",
          "@bp4": {
            paddingTop: "$1",
            subhead1: "400",
          },
        }}
      >
        Life's brighter under the sun<br></br>
      </Text>

      <Flex
        css={{
          paddingTop: "$5",
        }}
      >
        <Text
          css={{
            color: "white", // Text color is white
            backgroundColor: "transparent", // Make the background transparent
            headline6: "600",
            padding: "$1 $3",
            borderRadius: "8px",
            boxShadow: "none", // Remove the boxShadow
            transition: "background-color 0.3s", // Add a smooth transition for the background-color
            "&:hover": {
              color: "$primary",
              backgroundColor: "$primary200",
            },
            "&:active": {
              boxShadow: "none",
              color: "$onPrimary",
              backgroundColor: "$primary600",
            },
          }}
        >
          Join
        </Text>
        <Text
          css={{
            border: "1px solid $primary",
            color: "white", // Text color is white
            backgroundColor: "transparent", // Make the background transparent
            headline6: "600",
            padding: "$1 $3",
            borderRadius: "8px",
            marginLeft: "$3",
            boxShadow: "none", // Remove the boxShadow
            transition: "background-color 0.3s", // Add a smooth transition for the background-color
            "&:hover": {
              color: "$primary",
              backgroundColor: "$primary600",
            },
            "&:active": {
              boxShadow: "none",
              color: "$onPrimary",
            },
          }}
        >
          Host
        </Text>
        <Text
          css={{
            border: "1px solid $primary",
            color: "white", // Text color is white
            backgroundColor: "transparent", // Make the background transparent
            headline6: "600",
            padding: "$1 $3",
            borderRadius: "8px",
            marginLeft: "$3",
            boxShadow: "none", // Remove the boxShadow
            transition: "background-color 0.3s", // Add a smooth transition for the background-color
            "&:hover": {
              color: "$primary",
              backgroundColor: "$primary600",
            },
            "&:active": {
              boxShadow: "none",
              color: "$onPrimary",
            },
          }}
        >
          Sign in
        </Text>
      </Flex>

      <Text
        css={{
          subhead2: "500",
          color: "$onBg800",
          paddingTop: "$2",
        }}
      >
        Made with Zoom
      </Text>

      <Flex
        justify={"end"}
        css={{
          width: "100%",
          "& svg": {
            fill: "$onBg800",
            cursor: "pointer",
            marginRight: "$3",
            "&:hover": {
              fill: "$onBg",
              transform: "scale(1.1)",
            },
          },
        }}
      >
        <Ico_Facebook width="32" height="32" />
        <Ico_Instagram width="32" height="32" />
        <Ico_Twitter width="32" height="32" />
      </Flex>
    </Flex>
  );
}

export default Main;
