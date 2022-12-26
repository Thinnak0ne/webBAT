import React from 'react'

export default function About() {

  const page = [
    { id: 1, menu: "sing t trng karn jark karn h web" },
    { id: 2, menu: "sing t trng karn jark karn h web" },
  ]

  const page1 = [
    { id: 3, menu: "sing t trng karn jark karn h web" },
    { id: 4, menu: "sing t trng karn jark karn h web" },
  ]

  return (
    <div className='disJustT'>
      <div className='PaperT'>
        <div className='TextAboutT'>About us</div>

        <div>
          <div>
            <div className='PhotoA'>Image</div>
            <div className='BoxA'>haeng bun darn jai</div>
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className='HalfA'>
            <div>header</div>
            <div>jout pa song krng web</div>
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className='HalfA'>
            {page.map(row =>
              <div key={row.id} style={{display: "flex"}}>
                <img src='' width={"20%"} className='CirclerightA' />
                <p>{row.menu}</p>
              </div>
            )}
          </div>

          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className='HalfA'>
            {page.map(row =>
              <div key={row.id} style={{display: "flex"}}>
                <img src='' width={"20%"} className='CirclerightA' />
                <p>{row.menu}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
