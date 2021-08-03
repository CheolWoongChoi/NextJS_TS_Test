import { css } from '@emotion/react';
import React, { useCallback } from 'react';

import {
  AlertOutside,
  ButtonBox,
  CancleButton,
  Close,
  ConfirmButton,
  ContentsBox,
  StyledAlert,
  Text,
  Title,
} from './styles';

export type TAlertProps = {
  isOpen: boolean;
  title?: string;
  msg?: string;
  msgs?: string[];
  type?: number;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancle?: () => void;
};

function Alert({
  isOpen,
  title,
  msg,
  msgs,
  type = 1,
  onClose,
  onConfirm,
  onCancle,
}: TAlertProps) {
  const handleConfirm = useCallback(() => {
    if (onClose) {
      onClose();
    }

    if (onConfirm) {
      onConfirm();
    }
  }, [onClose, onConfirm]);

  const handleCancle = useCallback(() => {
    if (onClose) {
      onClose();
    }

    if (onCancle) {
      onCancle();
    }
  }, [onClose, onCancle]);

  return isOpen ? (
    <AlertOutside>
      <StyledAlert>
        <Close onClick={onClose}>닫기</Close>
        {/* 팝업 컨텐츠 */}
        <ContentsBox isOneText={!title && (Boolean(msg) || msgs?.length === 1)}>
          {title && <Title>{title}</Title>}
          {msg && <Text>{msg}</Text>}
          {msgs?.map((msg, idx) => (
            <Text key={'text-' + idx}>{msg}</Text>
          ))}
        </ContentsBox>
        {/* 하단버튼 타입 */}
        {type === 1 && (
          <ButtonBox>
            <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
          </ButtonBox>
        )}
        {type === 2 && (
          <ButtonBox>
            <CancleButton
              css={css`
                width: 50%;
              `}
              onClick={handleCancle}
            >
              취소
            </CancleButton>
            <ConfirmButton
              css={css`
                margin-left: 50%;
                width: 50%;
              `}
              onClick={handleConfirm}
            >
              확인
            </ConfirmButton>
          </ButtonBox>
        )}
      </StyledAlert>
    </AlertOutside>
  ) : null;
}

export default React.memo(Alert);
