import _ from 'lodash'
import React from 'react'
import { Grid, Image, Menu } from 'semantic-ui-react'


const srcImg_pang = process.env.PUBLIC_URL + '/assets/images/pang_1.png'
const srcImg_welcome = process.env.PUBLIC_URL + '/assets/images/txt.png'
const srcImg_bird = process.env.PUBLIC_URL + '/assets/images/29.png'
const srcImg_deco1 = process.env.PUBLIC_URL + '/assets/images/deco1.png'
const srcImg_deco2 = process.env.PUBLIC_URL + '/assets/images/16.png'
const srcImg_deco3 = process.env.PUBLIC_URL + '/assets/images/30.png'
const srcImg_deco4 = process.env.PUBLIC_URL + '/assets/images/17.png'
const srcImg_heartTop = process.env.PUBLIC_URL + '/assets/images/23.png'
const srcImg_alien = process.env.PUBLIC_URL + '/assets/images/43.png'
const srcImg_supergirl = process.env.PUBLIC_URL + '/assets/images/24.png'

const Home = () => {
    return (
    <div className="bg-banner banner-welcome">
        <div className="banner-bird"><Image src={srcImg_bird} centered fluid className="img-bird"/></div>
        <div className="banner-deco_1"><Image src={srcImg_deco1} centered fluid className="img-deco1"/></div>
        <div className="banner-deco_2"><Image src={srcImg_deco2} centered fluid className="img-deco2"/></div>
        <div className="banner-deco_3"><Image src={srcImg_deco3} centered fluid className="img-deco3"/></div>
        <div className="banner-deco_4"><Image src={srcImg_deco4} centered fluid className="img-deco4"/></div>
        <Grid>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Image src={srcImg_welcome} centered fluid className="img-welcome" />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <div className="banner-pang"><Image src={srcImg_pang} centered fluid className="img-pang"/></div>
        <div className="banner-menu">
            <a href="#" className="menu-intro"><Image src={srcImg_heartTop} centered fluid className="img-heart"/></a>
            <a href="#" className="menu-services"><Image src={srcImg_alien} centered fluid className="img-alien"/></a>
            <a href="#" className="menu-testimonial"><Image src={srcImg_supergirl} centered fluid className="img-supergirl"/></a>
        </div>
    </div>
    )
}

export default Home