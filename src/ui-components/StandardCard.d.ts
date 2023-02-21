/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Art } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandardCardOverridesProps = {
    StandardCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    "4bds 3 ba 2,530 sqft - Active"?: PrimitiveOverrideProps<TextProps>;
    "832 34th Ave, Seattle, WA 98122"?: PrimitiveOverrideProps<TextProps>;
    "tabler:trash-x-filled"?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector36472701?: PrimitiveOverrideProps<IconProps>;
    Vector36472702?: PrimitiveOverrideProps<IconProps>;
    "mdi:pen"?: PrimitiveOverrideProps<ViewProps>;
    Vector36472698?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type StandardCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    art?: Art;
} & {
    overrides?: StandardCardOverridesProps | undefined | null;
}>;
export default function StandardCard(props: StandardCardProps): React.ReactElement;
