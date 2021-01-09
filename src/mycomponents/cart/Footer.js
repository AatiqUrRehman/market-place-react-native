import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  View,
  Footer,
  List,
  ListItem,
  Left,
  Right,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge
} from "native-base";
import { ScrollView } from "react-native";
import CartView from "./cartListView";
import { GREEN_COLOR } from "../theme/colors";

export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Content>
            <CartView />
            <CartView />
            <CartView />
            <CartView />
            <CartView />
            <CartView />
          </Content>
        </ScrollView>
        <Footer>
          <FooterTab style={{ backgroundColor: "white" }}>
            <Content>
              <List>
                <ListItem avatar>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                      <Left>
                        <Text>Tag Heuer WristWatch</Text>

                        <Text
                          note
                          numberOfLines={1}
                          style={{ color: GREEN_COLOR }}
                        >
                          $ 1100
                        </Text>
                      </Left>
                    </View>
                    <View style={{ flex: 1, alignSelf: "center" }}>
                      <Right>
                        <Button
                          style={{
                            backgroundColor: GREEN_COLOR
                          }}
                        >
                          <Text style={{ alignSelf: "center" }}>CheckOut</Text>
                        </Button>
                      </Right>
                    </View>
                  </View>
                </ListItem>
              </List>
            </Content>
          </FooterTab>
        </Footer>
        <Footer>
          <FooterTab style={{ backgroundColor: "white" }}>
            <Button vertical>
              <Icon name="camera" style={{ color: "black" }} />
            </Button>
            <Button badge vertical>
              <Badge>
                <Text>51</Text>
              </Badge>
              <Icon active name="cart" style={{ color: "black" }} />
              {/* <Text>Navigate</Text> */}
            </Button>
            <Button vertical>
              <Icon name="person" style={{ color: "black" }} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
