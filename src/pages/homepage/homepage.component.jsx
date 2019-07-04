import React from 'react'
import './homepage.styles.scss';
import DirectoryMenu from '../../component/directory-menu/directory-menu.component';

export default function Homepage (){
    return (
        <div className='homepage'>
           <DirectoryMenu/>
        </div>
    )
}

