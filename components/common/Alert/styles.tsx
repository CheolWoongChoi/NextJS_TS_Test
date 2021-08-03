import styled from '@emotion/styled';

export const AlertOutside = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #111111;
    opacity: 0.7;
  }
`;

export const StyledAlert = styled.div`
  background-color: #fff;
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50% !important;
  padding: 40px 0 100px;
  width: calc(100% - 50px) !important;
  /* min-height: 210px !important; */
  transform: translate(-50%, -50%);
  text-align: center;
  box-sizing: border-box;

  p {
    width: 295px;
  }
`;

export const ContentsBox = styled.div<{ isOneText: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  height: 100%;

  ${({ isOneText }) =>
    isOneText &&
    `
    height: 70px;
  `}
`;

export const Title = styled.p`
  margin-bottom: 20px;
  height: 25px;
  line-height: 25px;
  font-size: 25px;
  font-weight: 700;
`;

export const Text = styled.p`
  height: 24px;
  font-size: 15px;
  color: #777;
`;

export const ButtonBox = styled.div``;

export const ConfirmButton = styled.button`
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background: #111;
`;

export const CancleButton = styled.button`
  position: absolute;
  bottom: 0;
  display: block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  color: rgba(119, 119, 119, 1);
  background: #333;
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border: 0;
  background: url('./common/ar08_close_ccc.png') 50% 50% no-repeat;
  background-size: 14px;
  text-indent: -9999px;
  cursor: pointer;
  outline-style: none;
  clip-path: inset(0 0 0 0);
  backface-visibility: hidden;
`;
