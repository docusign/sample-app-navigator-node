import { ThemeConfig } from "antd";

export const providerTheme: ThemeConfig = {
    token: {
        colorPrimary: "#9e9d9f",
        borderRadius: 100,
        colorBgContainer: "#ffffff",
        fontSize: 14,
        fontWeightStrong: 700,
        colorPrimaryBg: "#ffffff",
        colorPrimaryBgHover: "#9e9d9f",
        colorBorder: "#9e9d9f",
    },
    components: {
        Select: {
            colorTextPlaceholder: '#9e9d9f',
            colorPrimary: "#151515",
            colorPrimaryText: '#9e9d9f',
            hoverBorderColor: '#151515',
            optionActiveBg: '#5855FF1A',
            optionPadding: '8px',
            optionSelectedFontWeight: 700,
            fontWeightStrong: 700,
        },
        DatePicker: {
            colorTextPlaceholder: '#9e9d9f',
            colorPrimary: '#5855FF',
            borderRadius: 100,
            borderRadiusOuter: 100,
            colorPrimaryText: '#9e9d9f',
            hoverBorderColor: '#151515',
            cellHoverBg: '#5855FF1A',
            borderRadiusLG: 25,
            borderRadiusSM: 25,
            borderRadiusXS: 25,

            addonBg: 'red',
            colorIconHover: 'red',
        }
    }
};