import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Avatar, Button, Caption, Card, Headline, Paragraph, Subheading, Title } from 'react-native-paper';

export const Main = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Headline>Paper紹介</Headline>
                <Title>Title</Title>
                <Subheading>Typography</Subheading>
                <Paragraph>これが段落です</Paragraph>
                <Paragraph>
                    sampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletextsampletext
                </Paragraph>
                <Caption>キャプションも書けます。</Caption>
                <Subheading>Button</Subheading>
                <Button>
                    普通のButton(mode: text)
                </Button>
                <Button mode="contained" style={{ borderRadius: 12 }}>
                    containedなボタン
                </Button>
                <Button mode="outlined" style={{ borderRadius: 0 }}>
                    outlinedなボタン
                </Button>
                <Subheading>Card</Subheading>
                <Card style={{ width: 400, margin: 0 }}>
                    <Card.Cover source={require('../assets/adaptive-icon.png')} />
                    <Card.Title
                        title="ラーメン紀行 2日目"
                        subtitle="炎のラーメンチャンネル"
                        left={(props) => <Avatar.Icon {...props} label="YN" />}
                    />
                    <Card.Content>
                        <Paragraph>
                            とうとうこの伝説のお店にやってきました。
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions style={{ justifyContent: 'flex-end' }}>
                        <Button>見ない</Button>
                        <Button mode='contained'>見る</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
};