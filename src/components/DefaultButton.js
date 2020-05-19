import styled from 'styled-components/native';

export default styled.TouchableHighlight`
    width:${props=>props.width || 'auto'};
    height:${props=>props.height || 'auto'};
    backgroundColor:${props=>props.bgColor || '#EEE'};
    padding:10px 20px;
    borderRadius: 100px;
    justifyContent:center;
    alignItems:center;
`;