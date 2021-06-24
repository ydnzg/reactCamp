import React from 'react'
import { Dropdown, Menu ,Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
           
            <Menu.Item>
                <Image avatar spaced="right" src="https://scontent.fist1-1.fna.fbcdn.net/v/t1.18169-9/13932824_10210202442166000_4422559233710566982_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=y7v7jWEL9XcAX8YuXYe&tn=1Xo9CVEw5ah4JqPJ&_nc_ht=scontent.fist1-1.fna&oh=97c3469e84f602abc4dabbe363e124af&oe=60D54DF5"/>
                <Dropdown pointing="top left" text="Ezgi">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon= "info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon= "sign-out"/>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
