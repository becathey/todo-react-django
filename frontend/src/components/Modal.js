import { Component } from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from 'reactstrap'

class CustomModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: this.props.activeItem
        }
    }
    // Check if checkbox is checked
    handleChange = e => {
        let {name, value} = e.target
        if (e.target.type === "checkbox") {
            value = e.target.checked
        }
        const activeItem = {...this.state.activeItem, [name]: value}
        this.setState({activeItem})
    }
    render() {
        const {toggle, onSave} = this.props
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input 
                                type="text"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Enter todo title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input 
                                type="text"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Enter todo description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="completed">
                                <Input 
                                    className="me-2"
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completed
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" 
                        onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CustomModal