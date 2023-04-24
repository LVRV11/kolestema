import styled from '@emotion/styled'
import { Button } from './Button';
import { HiBan, HiAtSymbol, HiArchive } from 'react-icons/hi';
import { Box } from './Box';


const Text = styled.p`
color: ${props => props.theme.colors.text};
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes.l};
padding: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[3]}px;
`


const App = () => {
return (
<Box bg='tomato' color='text'>
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