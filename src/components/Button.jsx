import { StyleButton } from "./App/button.styled"

export const Button = ({ 
    icon: Icon = null, 
    type = 'button', 
    disabled = false, 
    children}) => {
return <StyleButton type={type} disabled = {disabled}>
    {Icon && <Icon size='16'/>}
    {children}
    </StyleButton>
}