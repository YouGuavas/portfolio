import { useEffect } from "react";
import { Gallery } from '../components/Gallery';

export default function CurrentObsession() {
  useEffect(() => {
    document.title = "Current Obsession | Patrick Yambrick"
   }, [document.title]
 )
  return(
    <div className="h-full my-forest-bg p-6 text-center">
      <section className="my-text font-body">
        <h1 className="font-bold m-2 my-title">Current Obsessions</h1>
        <Obsession data={{obsession: "Woodworking", when: "March, 2022", 
          projects: [

            {
              "Key Rack": {
              description: "A key rack that I made from scrap lumber and dollar store decorations.",
              pictures: [
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLVutjUuSEMbFrHNR0TnegJM54oEAblrcvsSiTk9nldBbwl6Vh9ZuS1ux9UiPPFIwQqimVTHANfmYNywGoODU7Xququ6As1NzEiiwWjKtXoRWxIm2eVk7nrne0mANywhmuTAWjIYmhwKzTtZwgvP7u66=w497-h662-no?authuser=0',
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLVutjUuSEMbFrHNR0TnegJM54oEAblrcvsSiTk9nldBbwl6Vh9ZuS1ux9UiPPFIwQqimVTHANfmYNywGoODU7Xququ6As1NzEiiwWjKtXoRWxIm2eVk7nrne0mANywhmuTAWjIYmhwKzTtZwgvP7u66=w497-h662-no?authuser=0',
                alt: 'A finished key rack'},
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLVCxwtOYVYDFQyL7AUF9-4Sb_8yi7aIrEnweU2dMrnpq1EmRmsIFvlz-Z6fmE93IxEik2rVEtES6FbpUO5NBh-Z1J_GMKk02Rfi26-E2YJEJAmsuGQZ1Q5dCx5m9WvvMbVC3YelKKmUUo7g8_abna1f=w883-h662-no?authuser=0',
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLVCxwtOYVYDFQyL7AUF9-4Sb_8yi7aIrEnweU2dMrnpq1EmRmsIFvlz-Z6fmE93IxEik2rVEtES6FbpUO5NBh-Z1J_GMKk02Rfi26-E2YJEJAmsuGQZ1Q5dCx5m9WvvMbVC3YelKKmUUo7g8_abna1f=w883-h662-no?authuser=0',
                alt: 'An unfinished key rack'},
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLX33auXQLlcl2RSnmNa7XNrZo6b7P4qjS33Pa8og88t7yc3cBscTH6ruYMPIruycf8lzjlkMo0uDg21DCpn3qRG7PdH5AdXKiJO6wCYPl-8iIwyWa9U_xX3z-VgyahTg8Odjp6MKSqTHz_F4x2ahRhw=w883-h662-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLX33auXQLlcl2RSnmNa7XNrZo6b7P4qjS33Pa8og88t7yc3cBscTH6ruYMPIruycf8lzjlkMo0uDg21DCpn3qRG7PdH5AdXKiJO6wCYPl-8iIwyWa9U_xX3z-VgyahTg8Odjp6MKSqTHz_F4x2ahRhw=w883-h662-no?authuser=0', 
                alt: 'A piece of scrap wood'}
              ]}
            },
            
            {
              "Walking Stick": {
              description: "A walking stick. I made this by cutting, sanding, and staining a fallen tree branch I found in my yard.", 
              pictures: [
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLVZQsOPrnxjZU5JZRP-AYFaqkj-CiwN6-b6Att4orRLIUBf9iLnohXsGbg4lC492GUoDfcjugKjk1RFSFeE-KuSdE1XbIiPg5pyRGtmbQutp3gfkc5fVWX2c7WwYx6m0xmO5z2JumRvypeA-U6n0Igv=w338-h450-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLVZQsOPrnxjZU5JZRP-AYFaqkj-CiwN6-b6Att4orRLIUBf9iLnohXsGbg4lC492GUoDfcjugKjk1RFSFeE-KuSdE1XbIiPg5pyRGtmbQutp3gfkc5fVWX2c7WwYx6m0xmO5z2JumRvypeA-U6n0Igv=w338-h450-no?authuser=0', 
                alt: 'A finished walking stick'}, 
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLVmHXbrts6xFSH6kSMeqvvyHrniFXhSQ0a_qZ9I6UAXPVosrG_cJcbGmAaE4vLfOcTsClTu2_8MsURTOfDqHAapVrs1-R6oHbsmJwkITeTW4AWoGwIydQ29x8H9u3kZO69DIgvDcZlN8qTCEUqhfo2s=w497-h662-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLVmHXbrts6xFSH6kSMeqvvyHrniFXhSQ0a_qZ9I6UAXPVosrG_cJcbGmAaE4vLfOcTsClTu2_8MsURTOfDqHAapVrs1-R6oHbsmJwkITeTW4AWoGwIydQ29x8H9u3kZO69DIgvDcZlN8qTCEUqhfo2s=w497-h662-no?authuser=0', 
                alt: 'A partially-finished walking stick (late stages)'},
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLVZW3uEkpjIVY-kbw6BTZm71mTiKPu8Uru2FY99hZNjBU6ctUQmMpT5ZZ34f1Pv5sqWC1FaFOp5JuErZuHdOLpgyE73Y-jIztQd5w81K9UJENkk_FxmzmV4P3Xo4hJzHwo7B4cAGBkFWHVwFhQSxi0E=w497-h662-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLVZW3uEkpjIVY-kbw6BTZm71mTiKPu8Uru2FY99hZNjBU6ctUQmMpT5ZZ34f1Pv5sqWC1FaFOp5JuErZuHdOLpgyE73Y-jIztQd5w81K9UJENkk_FxmzmV4P3Xo4hJzHwo7B4cAGBkFWHVwFhQSxi0E=w497-h662-no?authuser=0', 
                alt: 'A partially-finished walking stick (early stages)'},
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLV09irPynXWx1RY5LPlcYyn4gRXonyL2Z6LNE4_PTAvtNxq2iVN8P32WC3bo3hnQQzfaxR63DUp1dMuACIiZ8EkYuOy4OyPBbUek5vLpW1m0ASeLT4WEhu9_KeEH3MnD_bkY_K2GlVHbXquO_tlgAWo=w392-h662-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLV09irPynXWx1RY5LPlcYyn4gRXonyL2Z6LNE4_PTAvtNxq2iVN8P32WC3bo3hnQQzfaxR63DUp1dMuACIiZ8EkYuOy4OyPBbUek5vLpW1m0ASeLT4WEhu9_KeEH3MnD_bkY_K2GlVHbXquO_tlgAWo=w392-h662-no?authuser=0', 
                alt: 'An unfinished walking stick'}
              ]}
            },

            {
              "Hanging Shelf": {
              description: "A hanging shelf. I made this by sanding, staining, and drilling a spare piece of lumber I found in my shed.", 
              pictures: [
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLVZqH2N8jKhCmNdMkhjMBsfmZwxeU5g51k0GJogldT_hSbgePxsOa3Npl9dzVvZNhCaA5-8KPYTeKxccsCmXieQ3BeGx38oKqJiAkpZa_ZzM4rTadDRaBlD1tmYtKnJkLtkOqWQpNXM8lXHC089G4Lg=w883-h662-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLVZqH2N8jKhCmNdMkhjMBsfmZwxeU5g51k0GJogldT_hSbgePxsOa3Npl9dzVvZNhCaA5-8KPYTeKxccsCmXieQ3BeGx38oKqJiAkpZa_ZzM4rTadDRaBlD1tmYtKnJkLtkOqWQpNXM8lXHC089G4Lg=w883-h662-no?authuser=0', 
                alt: 'A completed hanging wooden shelf and miscellaneous Pokemon collection items'},
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLXd6Q7PMR0asC4YMxxkB7rX-qzMftaQogihsRVLx96wAX_mZloemYqnKHXq1oPoFQ9Eqsb3LViwsIT5TrkEq-q3HpwTx1NwLwKfbddGki6efzoyeLQwYCsEl9P5exp4T75_0KEFeOsCMk71ckdTTyuC=w883-h662-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLXd6Q7PMR0asC4YMxxkB7rX-qzMftaQogihsRVLx96wAX_mZloemYqnKHXq1oPoFQ9Eqsb3LViwsIT5TrkEq-q3HpwTx1NwLwKfbddGki6efzoyeLQwYCsEl9P5exp4T75_0KEFeOsCMk71ckdTTyuC=w883-h662-no?authuser=0', 
                alt: 'A partially-finished wooden shelf (late stages)'},
                {original: 'https://lh3.googleusercontent.com/pw/AM-JKLXQmB4RW6ki_uKgndwKdTBx8DfqrOA60ofTFXi2b_erptmgZMmQZJtodF1tFprcup2rRGJkSq9NLGg2lnn1gR5SuA657vKcubXqbnbDKy1odWUHA7eJwg9_iRsPvak6Myx2cMgzwUxBB4Hrexd4mpgE=w883-h662-no?authuser=0', 
                thumbnail: 'https://lh3.googleusercontent.com/pw/AM-JKLXQmB4RW6ki_uKgndwKdTBx8DfqrOA60ofTFXi2b_erptmgZMmQZJtodF1tFprcup2rRGJkSq9NLGg2lnn1gR5SuA657vKcubXqbnbDKy1odWUHA7eJwg9_iRsPvak6Myx2cMgzwUxBB4Hrexd4mpgE=w883-h662-no?authuser=0', 
                alt: 'A partially-finished wooden shelf (early stages)'}
              ]}
            }
        ]}}/>
      </section>
    </div>
  )
}

function Obsession(props) {
  const data = props.data;
  return(
    <div className="w-full my-sage-bg my-text-forest p-6">
        <h2 className="font-bold my-title">{data.obsession}</h2>
        <p>{data.when}</p>
          {//For all projects in an obsession, return relevant information/pictures
            data.projects.map((item, index) => {
              const project = Object.keys(item)[0];
              const information = item[project];
              const description = information.description;
              const pictures = information.pictures;
              return(
                <div key={index} className="grid sm:grid-cols-4 grid-cols-1 p-6">

                  <h3 className="col-span-4 font-bold my-title">{project}</h3>
                  <hr className="col-span-4 my-hr"/>
                  <p className="col-span-4 p-2">{description}</p>
                  <div className="sm:col-span-2 sm:col-start-2 col-span-3 ">
                    <Gallery items={pictures} />
                  </div>
                  
                  {//For all pictures related to a project, return a display "card"
                 /* pictures.map((item, index) => {
                    return (
                      <div key={index} className="col-span-1 p-2">
                        <a href={item.src}>
                          <img height="134px" width="250px" alt={item.alt} src={item.src}/>
                        </a>
                      </div>
                    )
                  })*/}
                </div>
                )
              }
            )
          }
    </div>
  )
}