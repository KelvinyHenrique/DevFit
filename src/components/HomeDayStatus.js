import React, {useState, useEffect} from 'react';
import styled  from 'styled-components/native';


const BalloonTriangle = styled.View`
    width:0;
    height:0;
    borderLeftColor:transparent;
    borderLeftWidth:15;
    borderBottomWidth:15;
    borderBottomColor:#dbd9d9;
    borderRightWidth:15;
    borderRightColor:transparent;

`;
const BallonArea = styled.View`
    width:90%;
    padding:20px;
    backgroundColor:#dbd9d9;
    borderRadius:10px;
    min-height:100px;
`;


export default (props) => {
    
    return (
        <>
            <BalloonTriangle></BalloonTriangle>
            <BallonArea></BallonArea>
        </>
    );
}
