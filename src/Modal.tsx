import React from "react";

function Modal({ onYes, onNo, children }: Props) {
    function handleKeyDown(e: React.KeyboardEvent) {
        switch (e.key) {
            case "Enter":
                onYes();
                break;
            case "Escape":
                onNo();
                break;
            default:
                break;
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50"
            onKeyDown={handleKeyDown} tabIndex={0}>
            <div className="bg-black p-10 rounded-lg">
                <h2 className="text-3xl">Jesmo li spremni da predjemo na odgovore?</h2>
                <div className="flex justify-center gap-5 mt-5">
                    <button onClick={onNo}>Ne</button>
                    <button onClick={onYes}>Da</button>
                </div>
                {children}
            </div>
        </div>
    )
}

interface Props {
    onYes: () => void,
    onNo: () => void,
    children?: React.ReactNode
}

export default Modal;