var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

import styled from '@emotion/styled';
import React from 'react';

var Icon = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject([
    "&::before {  content: '\\203A';  color: red; }"], [" &::before {  content: '\\203A';  color: red;    }"])));

export default function Errors(_a) {
    return React.createElement(Icon)
}

var templateObject_1
