import React from 'react'
import {HtmlEditor,Inject,Image,Link,Toolbar,QuickToolbar,RichTextEditorComponent} from '@syncfusion/ej2-react-richtexteditor'


import {Header} from '../../components/admin'
import {EditorData} from '../../data/dummy'

const Editor = () => {
  return (
    <div className='m-2 md:10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title='Editor'/>
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor,Toolbar,Image,Link,QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor