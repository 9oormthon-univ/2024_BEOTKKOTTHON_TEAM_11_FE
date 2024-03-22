import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
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

    &.hidden {
        display: none;
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

    &.active {
        max-height: ${(props) => props.$height}px;
    }
`;

const Input = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #ffffff;
    color: #fe5858;

    transition: background-color 0.2s;

    cursor: pointer;

    & > svg {
        stroke-width: 1;
        opacity: 0;

        transition: opacity 0.1s;

        &.active {
            opacity: 1;
        }
    }
`;

const PaymentAccordion = ({
    icon,
    text,
    children,
    value,
    onChange,
    hidden,
    ...props
}) => {
    const [isTransition, setIsTransition] = useState(false);
    const [height, setHeight] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        if (!ref || !ref.current) {
            return;
        }

        const observer = new ResizeObserver((entries) => {
            if (isTransition) return;
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
        onChange(!value);
    };

    const onTransitionEnd = (event) => {
        setIsTransition(false);
    };

    return (
        <>
            <Container
                onClick={onClick}
                {...props}
                className={classNames({ hidden })}
            >
                <Icon>{icon}</Icon>
                <Text>{text}</Text>
                <Input>
                    <BsCheckLg className={classNames({ active: value })} />
                </Input>
            </Container>
            <Wrapper
                ref={ref}
                className={classNames({
                    active: value,
                    transition: isTransition,
                })}
                $height={height}
                onTransitionEnd={onTransitionEnd}
            >
                {children}
            </Wrapper>
        </>
    );
};

export default PaymentAccordion;
