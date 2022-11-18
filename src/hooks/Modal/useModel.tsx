import {Modal, Spin} from "@douyinfe/semi-ui";
import React, {useState} from "react";
import {ModalReactProps} from "@douyinfe/semi-ui/lib/es/modal";

const useModal = (modelProps: ModalReactProps, Slot: React.FC<any>) => {
    const [visible, setVisible] = useState(false);
    const [spinning, setSpinning] = useState(false)

    const open = () => {
        setVisible(true);
    };
    const close = () => {
        setVisible(false);
    };

    const ModelContainer = (slotProps: any) => {
        const ref = React.useRef();
        return (
            <>
                <div>
                    <Modal
                        title="标题"
                        visible={visible}
                        maskClosable={false}
                        onCancel={close}
                        {...modelProps}
                    >
                        <Spin tip="加载中..." spinning={spinning}>
                            <Slot ref={ref} {...slotProps}></Slot>
                        </Spin>
                    </Modal>
                </div>
            </>
        )
    }
    return {
        ModelContainer,
        open,
        close
    }
}

export default useModal