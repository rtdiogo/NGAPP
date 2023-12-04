import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../WelcomePage'; 
import SplashScreen from '../SplashScreen';
import MenuPage from '../MenuPage';
import PatologiaPage from '../PatologiaPage';
import DescricaoPage from '../DescricaoPage';
import FormasPage from '../FormasPage';
import InformacaoPage from '../InformacaoPage';



export type NavegacaoPrincipalParams = {
    WelcomePage: undefined,
    SplashScreen:undefined,
    MenuPage: undefined,
    PatologiaPage: undefined,
    DescricaoPage: undefined,
    FormasPage: undefined,
    InformacaoPage: undefined,

}

const Stack = createStackNavigator<NavegacaoPrincipalParams>();
export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
            <Stack.Screen name="MenuPage" component={MenuPage} />
            <Stack.Screen name="PatologiaPage" component={PatologiaPage} />
            <Stack.Screen name="DescricaoPage" component={DescricaoPage} />
            <Stack.Screen name='FormasPage' component={FormasPage}/>
            <Stack.Screen name='InformacaoPage' component={InformacaoPage}/>
        </Stack.Navigator>
    </NavigationContainer>
)