import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.div`
    margin: 8px 0;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    color: #fe5858;

    cursor: pointer;

    transition: background-color 0.2s;

    gap: 12px;

    &:hover {
        background-color: #0000000f;
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
    flex-grow: 1;
`;

const Toggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const Wrapper = styled.div`
    overflow: hidden;
    max-height: 0px;

    &.transition {
        transition: max-height 0.3s;
    }
`;

const Accordion = ({ icon, text, element, ...props }) => {
    const [isOpen, setOpen] = useState(false);
    const [isTransition, setIsTransition] = useState(false);
    const [height, setHeight] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        if (!ref || !ref.current) {
            return;
        }

        const observer = new ResizeObserver((entries) => {
            if (!isOpen || isTransition) return;
            setHeight(entries[0].target.scrollHeight);
        });

        observer.observe(ref.current);
        setHeight(ref.current.scrollHeight);

        return () => {
            observer.disconnect();
        };
    }, [ref, isTransition]);

    const onClick = (event) => {
        if (!ref) return;

        setIsTransition(true);
        setOpen((state) => !state);
    };

    const onTransitionEnd = (event) => {
        setIsTransition(false);
    };

    return (
        <>
            <Container onClick={onClick} {...props}>
                <Icon>{icon}</Icon>
                <Text>{text}</Text>
                <Toggle>
                    {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </Toggle>
            </Container>
            <Wrapper
                ref={ref}
                className={classNames({
                    transition: isTransition,
                })}
                style={{
                    maxHeight: isOpen ? height : 0,
                }}
                onTransitionEnd={onTransitionEnd}
            >
                {element}
            </Wrapper>
        </>
    );
};

export default Accordion;
