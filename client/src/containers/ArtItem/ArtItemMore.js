//상세페이지에서 id값을 넘겨주는 것까지함 
//axios연결하는 거 하기.
import React from 'react'
import Container from '@material-ui/core/Container';

const ArtItemMore =({match}) => {
    
        console.log(match.params)
        console.log('확인')
        
        return (
            <div>
                <Container maxWidth="sm">
                왜 안나오는거야!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    id값은 {match.params.id}
                </Container>
            </div>
        );
    
}
export default ArtItemMore