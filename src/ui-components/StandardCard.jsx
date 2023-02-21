/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Art } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function StandardCard(props) {
  const { art, overrides, ...rest } = props;
  const vectorThreeSixFourSevenTwoSevenZeroTwoOnClick =
    useDataStoreDeleteAction({ id: art?.id, model: Art, schema: schema });
  return (
    <Flex
      gap="0"
      direction="column"
      width="345px"
      height="420px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "StandardCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="303.25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="8px 8px 0px 0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={art?.url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="233px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={art?.promt}
            {...getOverrideProps(overrides, "$99 USD")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={art?.negative_prompt}
            {...getOverrideProps(overrides, "4bds 3 ba 2,530 sqft - Active")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={art?.timestamp}
            {...getOverrideProps(overrides, "832 34th Ave, Seattle, WA 98122")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "tabler:trash-x-filled")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group")}
            >
              <Icon
                width="24px"
                height="24px"
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                paths={[]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector36472701")}
              ></Icon>
              <Icon
                width="18px"
                height="20px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.997802734375,
                  height: 20,
                }}
                paths={[
                  {
                    d: "M16.9989 4C17.2538 4.00028 17.4989 4.09788 17.6843 4.27285C17.8696 4.44782 17.9811 4.68695 17.9961 4.94139C18.011 5.19584 17.9282 5.44638 17.7646 5.64183C17.601 5.83729 17.369 5.9629 17.1159 5.993L16.9989 6L16.9179 6L15.9989 17C15.9989 17.7652 15.7066 18.5015 15.1816 19.0583C14.6566 19.615 13.9388 19.9501 13.1749 19.995L12.9989 20L4.99889 20C3.40089 20 2.09489 18.751 2.00689 17.25L2.00189 17.083L1.07889 6L0.998892 6C0.744012 5.99972 0.49886 5.90212 0.313524 5.72715C0.128188 5.55218 0.0166572 5.31305 0.00172004 5.05861C-0.0132171 4.80416 0.0695667 4.55362 0.233157 4.35817C0.396747 4.16271 0.628796 4.0371 0.881892 4.007L0.998892 4L16.9989 4ZM7.50989 9.14C7.30037 9.01528 7.0525 8.9714 6.8129 9.01663C6.5733 9.06186 6.35848 9.19307 6.20884 9.38558C6.0592 9.5781 5.98506 9.81865 6.00035 10.062C6.01565 10.3054 6.11933 10.5347 6.29189 10.707L7.58389 12L6.29189 13.293L6.20889 13.387C6.05348 13.588 5.9804 13.8406 6.00449 14.0935C6.02859 14.3464 6.14805 14.5807 6.33861 14.7488C6.52918 14.9168 6.77656 15.006 7.03051 14.9982C7.28446 14.9905 7.52593 14.8863 7.70589 14.707L8.99889 13.415L10.2919 14.707L10.3859 14.79C10.5869 14.9454 10.8395 15.0185 11.0924 14.9944C11.3453 14.9703 11.5796 14.8508 11.7476 14.6603C11.9157 14.4697 12.0049 14.2223 11.9971 13.9684C11.9894 13.7144 11.8852 13.473 11.7059 13.293L10.4139 12L11.7059 10.707L11.7889 10.613C11.9443 10.412 12.0174 10.1594 11.9933 9.90647C11.9692 9.65355 11.8497 9.41928 11.6592 9.25125C11.4686 9.08321 11.2212 8.99402 10.9673 9.00177C10.7133 9.00953 10.4718 9.11365 10.2919 9.293L8.99889 10.585L7.70589 9.293L7.61189 9.21L7.50989 9.14ZM10.9989 0C11.5293 4.44089e-16 12.038 0.210714 12.4131 0.585786C12.7882 0.960859 12.9989 1.46957 12.9989 2C12.9986 2.25488 12.901 2.50003 12.726 2.68537C12.5511 2.8707 12.3119 2.98223 12.0575 2.99717C11.8031 3.01211 11.5525 2.92933 11.3571 2.76574C11.1616 2.60214 11.036 2.3701 11.0059 2.117L10.9989 2L6.99889 2L6.99189 2.117C6.96179 2.3701 6.83618 2.60214 6.64072 2.76574C6.44527 2.92933 6.19473 3.01211 5.94029 2.99717C5.68585 2.98223 5.44671 2.8707 5.27174 2.68537C5.09677 2.50003 4.99918 2.25488 4.99889 2C4.99873 1.49542 5.1893 1.00943 5.53239 0.639452C5.87548 0.269471 6.34574 0.0428433 6.84889 0.00500011L6.99889 0L10.9989 0Z",
                    fill: "rgba(255,0,64,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="8.33%"
                bottom="8.33%"
                left="12.5%"
                right="12.5%"
                onClick={() => {
                  vectorThreeSixFourSevenTwoSevenZeroTwoOnClick();
                }}
                {...getOverrideProps(overrides, "Vector36472702")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "mdi:pen")}
        >
          <Icon
            width="18.59px"
            height="18px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.71142578125,
              height: 21.24755859375,
            }}
            paths={[
              {
                d: "M17.71 4.0425C17.37 4.3825 17.04 4.7125 17.03 5.0425C17 5.3625 17.34 5.6925 17.66 6.0025C18.14 6.5025 18.61 6.9525 18.59 7.4425C18.57 7.9325 18.06 8.4425 17.55 8.9425L13.42 13.0825L12 11.6625L16.25 7.4225L15.29 6.4625L13.87 7.8725L10.12 4.1225L13.96 0.2925C14.35 -0.0975 15 -0.0975 15.37 0.2925L17.71 2.6325C18.1 3.0025 18.1 3.6525 17.71 4.0425ZM0 14.2525L9.56 4.6825L13.31 8.4325L3.75 18.0025L0 18.0025L0 14.2525Z",
                fill: "rgba(255,0,64,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.49%"
            bottom="12.5%"
            left="12.5%"
            right="10.04%"
            {...getOverrideProps(overrides, "Vector36472698")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
