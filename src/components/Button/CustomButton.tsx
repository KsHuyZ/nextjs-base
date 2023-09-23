import { Button as AntButton } from 'antd'
import React from 'react'
import type { ButtonProps } from 'antd'

interface CustomButtonProps extends ButtonProps {
    title: string
}

export const Button = ({ title, ...props }: CustomButtonProps) => {
    return (
        <AntButton style={{ backgroundColor: "#00695c", color: "#ffff", borderColor: "#00695c" }} {...props}>
            {title}
        </AntButton>
    )
}
export const LinkButton = ({ title, ...props }: CustomButtonProps) => {
    return (
        <AntButton type='link' style={{ color: '#00695c', padding: 0 }} {...props}>
            {title}
        </AntButton>
    )
}
