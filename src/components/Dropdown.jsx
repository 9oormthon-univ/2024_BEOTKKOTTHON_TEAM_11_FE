import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import styled from 'styled-components';

const Container = styled.button`
    width: 100%;
    text-align: left;
    border: none;
    margin-top: 24px;
    padding: 10px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    color: #ffffff;
    background-color: #fe5858;

    cursor: pointer;

    transition: background-color 0.2s;

    gap: 12px;

    &:hover {
        background-color: #cf3d3d;
    }
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 600;
    flex-grow: 1;
`;

const Toggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const Wrapper = styled.div`
    margin-bottom: 24px;
    overflow: hidden;
    max-height: 0px;
    color: #d64949;
    font-weight: 500;
    font-size: 16px;

    &.transition {
        transition: max-height 0.3s;
    }

    &.active {
        max-height: ${(props) => props.$height}px;
    }
`;

const EmptyText = styled.p`
    padding: 10px 16px;
    font-weight: 400;
`;

const Item = styled.div`
    padding: 10px 16px;

    font-size: 18px;

    background-color: #fff6f6;
    transition: background-color 0.2s;

    cursor: pointer;

    &:hover {
        background-color: #ffe3e3;
    }

    &.active {
        font-weight: 800;
    }

    &:first-child {
        border-radius: 8px 8px 0 0;
    }

    &:last-child {
        border-radius: 0 0 8px 8px;
    }
`;

const Dropdown = ({ text, items, onSelect, value, ...props }) => {
    const [isOpen, setOpen] = useState(false);
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
        setOpen((state) => !state);
    };

    const onTransitionEnd = (event) => {
        setIsTransition(false);
    };

    const onItemClick = (event, value) => {
        onSelect(value);
    };

    const elements = items.map((item, index) => {
        return (
            <Item
                key={index}
                onClick={(event) => onItemClick(event, item.value)}
                className={classNames({ active: item.value === value })}
            >
                {item.text}
            </Item>
        );
    });

    return (
        <>
            <Container onClick={onClick} {...props}>
                <Text>{text}</Text>
                <Toggle>
                    {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </Toggle>
            </Container>
            <Wrapper
                ref={ref}
                className={classNames({
                    active: isOpen,
                    transition: isTransition,
                })}
                $height={height}
                onTransitionEnd={onTransitionEnd}
            >
                {elements.length === 0 ? (
                    <EmptyText>아직 참여한 사람이 없습니다.</EmptyText>
                ) : (
                    elements
                )}
            </Wrapper>
        </>
    );
};

Dropdown.defaultProps = {
    items: [],
};

export default Dropdown;
