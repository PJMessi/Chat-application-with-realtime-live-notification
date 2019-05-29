<template>
<div>

    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-5 align-self-center">
                <h4 class="page-title">{{selected_contact.name}}</h4>
            </div>
        </div>
    </div>

    <div class="container-fluid">
         
        <div class="row">
     
            <div class="col-lg-12">
                <div class="card">

                    <div class="card-body">
                        <!-- <h4 class="card-title">{{this.selected_contact.name}}</h4> -->
    
                        <div class="chat-box scrollable position-relative" style="height:375px;">
                            <!--chat Row -->
                            <ul v-if="messages.length>0" class="chat-list">
                                <!--chat Row their message-->
                                    
                                <li v-for="message in messages" v-bind:key="message.id" :class="user.id == message.from?'odd': ''" class="chat-item">
                                    <div class="chat-img">
                                        <img v-if="user.id != message.from" :src="selected_contact.profile_image" alt="user">
                                    </div>
                                    <div class="chat-content">
                                        <!-- <h6 v-if="user.id == message.from" class="font-medium">{{selected_contact.name}}</h6> -->
                                        <div @click="toggle_time(message.id)" class="box" :class="user.id != message.from?' bg-light-info': 'bg-light-inverse'">{{message.text}}</div>
                                    </div>
                                    <div :id="'message_time_'+message.id" style="display: none" class="chat-time">{{message.created_at | message_time}}</div>
                                </li>
                               
                            </ul>
                            <ul v-else class="chat-list">
                                <li class="chat-item" v-if="selected_contact.id">
                                    <div class="chat-content">
                                        <div class="box bg-light-info">
                                            <h5>Say 'Hi' to {{selected_contact.name}}</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="chat-item" v-else>
                                    <div class="chat-content">
                                        <div class="box bg-light-info">
                                            <h5>Select a contact to start conversation.</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    <MessageComposer @send_message="send_message"></MessageComposer>
                
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
    import MessageComposer from './MessageCompose.vue';
    export default {

        components: {MessageComposer},

        mounted() {
            console.log('Master Component mounted.')
            Fire.$on("contact_selected", (contact) => {
                this.selected_contact = contact;
            })
            Echo.private(`message_${this.user.id}`)
            .listen("NewMessage", (e) => {
                this.handle_new_message(e.message);
            });
            
        },

        props: {
            user: {
                type: Object
            }
        },

        data() {
            return {
                selected_contact: {},
                messages: []
            }
        },

        methods: {
            fetch_messages() {
                axios.get('/api/messages/fetchMessages/' + this.selected_contact.id)
                .then((response) => {
                    this.messages = response.data;
                })
                .catch((error) => {
                    console.log("Caught Error: " + error);
                });
            },

            toggle_time(id) {
                let target = "#message_time_" + id;
                $(target).slideToggle();
            },

            send_message(message_content) {     
                if(this.selected_contact.id) {
                    axios.post('api/messages/send', {
                        message_content: message_content,
                        receiver_id: this.selected_contact.id
                    })
                    .then((response) => {
                        this.messages.push(response.data);
                    })
                    .catch((error) => {
                        console.log("Caught Error: " + error);
                    })
                }
            },

            handle_new_message(message) {
                console.log(message)
                if(this.selected_contact.id == message.from) {
                    this.messages.push(message);
                }
                else {
                    Fire.$emit("new_message", message.from_contact);
                    Toast.fire({
                        type: 'success',
                        title: 'New Message'
                    })
                }
            }  
        },

        watch: {
            selected_contact(selected_contact) {
                this.fetch_messages();
            }
        }
    }
</script>
