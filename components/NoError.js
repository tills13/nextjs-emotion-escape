import styled from '@emotion/styled';
import React from 'react';

const Icon = styled.span`
    &::before {
        content: '\203A';
        color: green;
    }
`;

export default function NoError() {
    return React.createElement(Icon)
}
