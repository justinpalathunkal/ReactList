import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

class ReactList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    };
        
    render() {
        const { items } = this.props.item.state;
        console.log(this.props.item)
        console.log("GET", items)
        return(
            <Container>
               <ListGroup>
                   <TransitionGroup className="shopping-list">
                       {items.map(({ _id, name }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                    <Button
                                        className="remove-btn" 
                                        color="danger" 
                                        size="sm"
                                        onClick= {this.onDeleteClick.bind(this, _id)}
                                        >&times;
                                    </Button>  
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                       ))}
                   </TransitionGroup>
               </ListGroup>
            </Container>
        );
    }
}

ReactList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect (mapStateToProps, { getItems, deleteItem })(ReactList);



// import React, { Component } from 'react';
// import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { connect } from 'react-redux';
// import { getItems, deleteItem } from '../actions/itemActions';
// import PropTypes from 'prop-types';
// import uuid from 'react-uuid';

// class ReactList extends Component {

//     componentDidMount() {
//         this.props.getItems();
//     }

//     onDeleteClick = id => {
//         this.props.deleteItem(id);
//     };
        
//     render() {
//         const { items } = this.props.item.state;
//         console.log("GET", items)
//         return(
//             <Container>
//                <ListGroup>
//                    <TransitionGroup className="shopping-list">
//                        {items.map(({ id, name }) => (
//                                 <CSSTransition key={id} timeout={500} classNames="fade">
//                                     <ListGroupItem>
//                                     <Button
//                                         className="remove-btn" 
//                                         color="danger" 
//                                         size="sm"
//                                         onClick= {this.onDeleteClick.bind(this, id)}
//                                         >&times;
//                                     </Button>  
//                                         {name}
//                                     </ListGroupItem>
//                                 </CSSTransition>
//                        ))}
//                    </TransitionGroup>
//                </ListGroup>
//             </Container>
//         );
//     }
// }

// ReactList.propTypes = {
//     getItems: PropTypes.func.isRequired,
//     item: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     item: state.item
// });

// export default connect (mapStateToProps, { getItems, deleteItem })(ReactList);
