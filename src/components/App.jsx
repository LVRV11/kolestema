import styled from '@emotion/styled'
import { Button } from './Button';
import { HiBan, HiAtSymbol, HiArchive } from 'react-icons/hi';
import { Box } from './Box';
import { AppBar } from './AppBar';

const Text = styled.p`
color: ${props => props.theme.colors.text};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.l};
padding: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[3]}px;
`


const App = () => {
return (
<Box 
bg='tomato' 
color='text' 
pt={3} 
width='70%' 
display='flex' 
alignItems='centr'
position='relative'
as='main'>
    <AppBar/>
    <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Text>
    <Button icon={HiBan}>Search</Button>
    <Button icon={HiAtSymbol}>Filter</Button>
    <Button type='submit' icon={HiArchive}>LogIn</Button>
    <Button type='submit'>LogIn</Button>
</Box>
    );
};

export default App;