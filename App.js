import React, {useState} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Task from './components/Task';
import FeedPost from './components/FeedPost';
import SearchProfile from './components/SearchProfile';
import Chat from './components/Chat';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function HomeScreen() {

  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState(['Java OOP Basics', 'Workout 20 min', 'Read 30 pages']);

  const handleAddTask = () => {

    if (task != null) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
    else {
      alert('Please enter something!');
    }

    // setTaskItems([...taskItems, task]);
    // setTask(null);
    // console.log(taskItems)
  }

  return (
    <View style={stylesHome.container}>

      {/* Today's tasks */}
      <View style={stylesHome.headerContainer}>
        <Text style={stylesHome.sectionTitle}>Today's Challenges</Text>
      </View>

      <View style={stylesHome.tasksWrapper}>
        <ScrollView style={stylesHome.items}>
          {/* Tasks go there */}
          {
            taskItems.map((item, index) => {
              return <Task key={index} text={item}/>
            })
          }
        </ScrollView>
    </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={stylesHome.writeTaskWrapper}>
          <TextInput 
            style={stylesHome.input}
            placeholder={'Write a task..'}
            value={task}
            onChangeText={text => setTask(text)}/>

          <TouchableOpacity 
            onPress={() => handleAddTask()}
            >
            <View style={stylesHome.addWrapper}>
              <Text style={stylesHome.addText}>+</Text>
            </View>
          </TouchableOpacity>
        
      </KeyboardAvoidingView>
    </View>
  )
}

function ProfileScreen() {
  return (
    <ScrollView
      style={stylesProfile.container}>

      <View style={stylesProfile.profileContainer}>

        <Image 
          style={stylesProfile.profileImage}
          source={require('./assets/profile-img.jpeg')}
        />

        <View style={stylesProfile.profileInfoView}>

          <Text style={stylesProfile.name}>Juan Rodrigo</Text>
          <Text style={stylesProfile.about}>Young enthusiast who's willing to reach the perfection by challenging myself every single day</Text>

          <View style={stylesProfile.profileButtons}>
            <TouchableOpacity style={stylesProfile.friendsBtn}>
              <Text style={stylesProfile.friendsNum}>175 friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesProfile.friendsBtn}>
              <Text style={stylesProfile.friendsNum}>3 active challenges</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <View style={stylesProfile.challengesContainer}>
        <Text style={stylesProfile.challengesText}>Challenges: </Text>
        
        <Task text={'Java Course'}/>
        <Task text={'20 books in month'}/>
        <Task text={'Trade Crypto'}/>
        
      </View>

      <View style={stylesProfile.postsSection}>
        <Text style={stylesProfile.challengesText}>Posts:</Text>

        <View style={stylesProfile.postContainer}>

          <View style={stylesProfile.postHeadingContainer}>
            <View style={stylesProfile.postHeading}>
              <Image 
                style={stylesProfile.postIcon}
                source={require('./assets/post-icon.png')}
              />
              <Text style={stylesProfile.challengeName}>Java Course</Text>
            </View>
            <Text style={stylesProfile.postDate}>05.04.2022</Text>
          </View>

          <View style={stylesProfile.postBox}>
            <Text style={stylesProfile.postText}>Yeah, I'm making progress, already learnt the OOP side!</Text>
          </View>

        </View>

        <View style={stylesProfile.postContainer}>

          <View style={stylesProfile.postHeadingContainer}>
            <View style={stylesProfile.postHeading}>
              <Image 
                style={stylesProfile.postIcon}
                source={require('./assets/post-icon.png')}
              />
              <Text style={stylesProfile.challengeName}>20 Books in Month</Text>
            </View>
            <Text style={stylesProfile.postDate}>12.09.2021</Text>
          </View>

          <View style={stylesProfile.postBox}>
            <Text style={stylesProfile.postText}>
              Already finished 5 books, the latest was the
                tough one, recommend to everyone!
            </Text>
          </View>

        </View>

      </View>



    </ScrollView>
  )
}

function FeedScreen() {

  const profileImages = {
    img1: require('./assets/profile-pic1.png'),
    img2: require('./assets/profile-pic2.png'),
    img3: require('./assets/profile-pic3.png'),
    img4: require('./assets/profile-pic4.png'),

  };

  return (
    <ScrollView
      style={stylesFeed.container}>
      
      <View style={stylesFeed.feedHeaderContainer}>
        <Image 
          style={stylesFeed.profileImg}
          source={require('./assets/profile-img.jpeg')}
        />
        <Text style={stylesFeed.feedHeading}>Feed</Text>
      </View>

      <FeedPost 
        name='Ben Parker'
        hours='3h'
        challengeName='Pump Up'
        postText='Ive been working on workout, so now I see the changes I made, especially step 2(pushups) is very helpful'
        likesNum='667'  
        profileImg={profileImages.img1}
      />
      <FeedPost 
        name='Julian Wan'
        hours='15h'
        challengeName='Learn Japanese'
        postText='Ive been working on workout, so now I see the changes I made, especially step 2(pushups) is very helpful'
        likesNum='538' 
        profileImg={profileImages.img2}
      />
      <FeedPost 
        name='Jannet Smith'
        hours='1d'
        challengeName='Learn Japanese'
        postText='Few month ago started learning and now with the help of app I am on my 3rd and final step 本当にありがとう。'
        likesNum='1253'  
        profileImg={profileImages.img3}
      />
      <FeedPost 
        name='Daniel Jackson'
        hours='2d'
        challengeName='Be a good boy'
        postText='I learn a new command “sit” then the keeper gives me 
        the bone, I am so close to being a good boy;)'
        likesNum='324095' 
        profileImg={profileImages.img4}
      />
      <FeedPost 
        name='Julian Wan'
        hours='3d'
        challengeName='Learn WebDesign'
        postText='Ive been working on design, so Ive published my 
        recent mobile app design. Check it out!'
        likesNum='1042' 
        profileImg={profileImages.img2}
      />
      <FeedPost 
        name='Jannet Smith'
        hours='3d'
        challengeName='Learn WebDesign'
        postText='Couple days ago I discovered really great course on Web Design. This thing is truly cool!'
        likesNum='1042' 
        profileImg={profileImages.img3}
      />
      

    </ScrollView>
  )
}

function SearchScreen() {

  const profileImages = {
    img1: require('./assets/search-profile-pic1.png'),
    img2: require('./assets/search-profile-pic2.png'),
    img3: require('./assets/search-profile-pic3.png'),
    img4: require('./assets/search-profile-pic4.png'),
    img5: require('./assets/search-profile-pic5.png'),
  };

  const [person, setPerson] = useState();

  const cancelSearch = () => {
    setPerson(null);
  }

  return (
    <ScrollView
      style={stylesSearch.container}>
    
      <View style={stylesSearch.searchContainer}>
        <TextInput 
          style={stylesSearch.searchInput}
          placeholder={'Type to search..'}
          value={person}
          onChangeText={text => setPerson(text)}/>
        <TouchableOpacity 
          style={stylesSearch.cancelBtn}
          onPress={() => cancelSearch()}>
          <Text style={stylesSearch.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <View style={stylesSearch.filterContainer}>
        <TouchableOpacity style={stylesSearch.filterBtn}>
          <Text style={stylesSearch.filterText}>Challenges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesSearch.filterBtn}>
          <Text style={stylesSearch.filterText}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity style={stylesSearch.filterBtn}>
          <Text style={stylesSearch.filterText}>All</Text>
        </TouchableOpacity>
      </View>

      {/* SearchProfile Component */}
      <SearchProfile 
        name={'Justin Timberlake'}
        text={'The CEO of BIG Ind. searching for like - minded people that are curious in achieving their BIG Goals!'}
        profileImg={profileImages.img1}
      />
      <SearchProfile 
        name={'Tereza Romanova'}
        text={'Founder & CEO @ HR.consulting | Helping companies to improve KPI through right people management'}
        profileImg={profileImages.img2}
      />
      <SearchProfile 
        name={'Pak Nikolaev'}
        text={'Fonomodern. Dinil dofide viskade. Trädmord tetragöpp. Lapyna multiliga.'}
        profileImg={profileImages.img3}
      />
      <SearchProfile 
        name={'Kim Evgeniy'}
        text={'Krorade tektiga. Eldost polyde. Kroliktig öbilingar dinerat. Rör terafäling i nysade.'}
        profileImg={profileImages.img4}
      />
      <SearchProfile 
        name={'Daniel Jackson'}
        text={'Krorade tektiga. Eldost polyde. Kroliktig öbilingar dinerat. Rör terafäling i nysade.'}
        profileImg={profileImages.img5}
      />
      <SearchProfile 
        name={'Tereza Romanova'}
        text={'Founder & CEO @ HR.consulting | Helping companies to improve KPI through right people management'}
        profileImg={profileImages.img2}
      />

    </ScrollView>
  )
}

function MessageScreen() {

  const profileImages = {
    img1: require('./assets/profile-pic1.png'),
    img2: require('./assets/profile-pic2.png'),
    img3: require('./assets/profile-pic3.png'),
    img4: require('./assets/profile-pic4.png'),
    img5: require('./assets/search-profile-pic3.png'),
  };

  return (
    <ScrollView
      style={stylesMessage.container}>
      <View style={stylesMessage.headerContainer}>
        <TouchableOpacity style={stylesMessage.editBtn}>
          <Text style={stylesMessage.editText}>Edit</Text>
        </TouchableOpacity>

        <Text style={stylesMessage.chatsText}>Chats</Text>

        <TouchableOpacity style={stylesMessage.startChatBtn}>
          <Ionicons name="create-outline" size={26} color="#0A7AFF" 
            style={stylesMessage.startChatImg}
          />
        </TouchableOpacity>
      </View>

      {/* Chat Component */}
      <Chat 
        name={'Ben Parker'}
        time={'15:03'}
        text={'Hey bro! I just found out really cool challenge. We can learn coding in Python just in 1 month!'}
        profileImg={profileImages.img1}
      />
      <Chat 
        name={'Julian Wan'}
        time={'12:35'}
        text={'Do you know how can I take more than 3 challenges? Do I really have to pay for it? Well... I am gonna!!'}
        profileImg={profileImages.img2}
      />
      <Chat 
        name={'Jannet Smith'}
        time={'Yesterday'}
        text={'Wassup! What do you think about starting the collaborative challenge? I feel like doing it on my own would be hard.'}
        profileImg={profileImages.img3}
      />
      <Chat 
        name={'Daniel Jackson'}
        time={'Yesterday'}
        text={'I know that I am just a pet, but bro, I wanna grows as a dog in a professional way! Teach me to take challenges!'}
        profileImg={profileImages.img4}
      />
      <Chat 
        name={'Mark Zuckerberg'}
        time={'2d ago'}
        text={'Wow! Really cool app bro. Would you mind if I bought it? I think we can make millions on it!'}
        profileImg={profileImages.img5}
      />
    </ScrollView>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Home') {
              // iconName = focused
              //   ? 'ios-information-circle'
              //   : 'ios-information-circle-outline';
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }
              else if (route.name === 'Feed') {
                iconName = 'ios-newspaper-outline'
            } else if (route.name === 'Message') {
              iconName = 'chatbox-ellipses'
            }  else if (route.name === 'Profile') {
              return <MaterialCommunityIcons name="contacts" size={28} color={color}/>
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={28} color={color} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          // tabBarActiveTintColor: 'tomato',
          // tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name='Feed' component={FeedScreen}/>
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Message' component={MessageScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#defafa',
  },
  tasksWrapper: {
    // paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: '#b6dbd8',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  items: {
    height: '79%'
  },
  writeTaskWrapper: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    padding: 15,
    backgroundColor: 'white',
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    width: '70%',
  },
  addWrapper: {
    width: 60,
    height: 60,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
    
  },
});

const stylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6dbd8'
    // padding: 15, 
  },
  profileContainer: {
    // padding: 15,
    paddingTop: 40,
    // backgroundColor: '#defafa',
    marginBottom: 3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  profileImage: {
    marginLeft: 15,
    marginTop: 15,
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 1,
  },
  profileInfoView: {
    // borderWidth: 1,
    // borderColor: 'green',
    width: '100%',
    // backgroundColor: '#defafa',
    padding: 15,
    borderRadius: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.9,
    marginBottom: 5,
  },
  about: {
    fontSize: 16,
    marginBottom: 15,
  },
  profileButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  friendsBtn: {
    // backgroundColor: '#defafa',
    padding: 10,
    borderRadius: 10,
  },
  friendsNum: {
    fontSize: 16,
    color: 'blue',
  },
  challengesNum: {},
  challengesContainer: {
    width: '100%',
    backgroundColor: '#defafa',
    padding: 15,
    borderRadius: 15,
    marginBottom: 3,
  },
  challengesText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },


  postsSection: {
    backgroundColor: '#defafa',
    padding: 15,
    width: '100%',
    borderRadius: 15,
  },
  postContainer: {
    marginBottom: 15,
  },
  postHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: 10,
  },
  postHeading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  challengeName: {
    fontSize: 18,
  },
  postDate: {
    fontSize: 16,
  },
  postBox: {
    padding: 15,
    backgroundColor: '#e3e8e8',
    borderRadius: 15,
  },
  postText: {
    fontSize: 17,
  },

});

const stylesFeed = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6dbd8',
    
  },
  feedHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b6dbd8',
    padding: 15,
    paddingTop: 40,
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
    marginBottom: 1,
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  feedHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    left: '47%',
    bottom: 27,
    letterSpacing: 0.9,
  },
});

const stylesSearch = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#defafa',
  },
  searchContainer: {
    backgroundColor: '#b6dbd8',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: '80%',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
  },
  cancelBtn: {
    
  },
  cancelText: {
    fontSize: 18,
    color: '#0A7AFF',
  },
  filterContainer: {
    backgroundColor: '#defafa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  filterBtn: {
    backgroundColor: '#83ebeb',
    padding: 10,
    borderRadius: 15,
    width: 100,
    alignItems: 'center',
  },
  filterText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

const stylesMessage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#defafa'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#b6dbd8'
  },
  editText: {
    color: '#0A7AFF',
    fontSize: 16,
  },
  chatsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  startChatBtn: {},
  startChatImg: {},
});