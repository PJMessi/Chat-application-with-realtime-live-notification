<template>
    <div>
       
        <!-- Main Sidebar Container //contact list-->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">

            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <img src="images/logo/logo.png" alt="Logo" class="brand-image img-circle elevation-3"
                    style="opacity: .8">
                <span class="brand-text font-weight-light">{{appName}}</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                    <img :src="user.profile_image" class="img-circle elevation-2" alt="User">
                    </div>
                    <div class="info">
                    <a href="#" class="d-block">{{user.name}}</a>
                    </div>
                </div>

                <ContactList :contacts="contacts" @contact_selected="start_conversation_with"></ContactList>

            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <br>

            <!-- Main content -->
            <div class="content">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <Conversation  @new="saveNewMessage" :currentUser="user" :selectedContact="selected_contact" :messages="messages"></Conversation>
                    </div>
                </div>
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        
    </div>
</template>

<script>

    import ContactList from './ContactList.vue'
    import Conversation from './Conversation.vue'

    export default {
        components: {ContactList, Conversation},

        props: {
            user: {
                type: Object
            }
        },

        data() {
            return {
                appName: "MyChat",
                contacts: [],
                selected_contact: {},
                messages: [],
            } 
        },

        mounted() {
            console.log('Master Component mounted.');
            Echo.private(`messages_${this.user.id}`)
            .listen('NewMessage', (e) => {
                this.handleIncomingMessage(e.message);
            });

            this.fetchContactList();
        },

        methods: {
            fetchContactList() {
                axios.get('/api/contacts')
                .then((response) => {
                    this.contacts = response.data;
                    console.log(this.contacts)
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            start_conversation_with(contact) {
                
                axios.get('/api/messages/' + contact.id)
                .then((response) => {
                    this.messages = response.data;
                    this.selected_contact = contact;
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            saveNewMessage(message) {
                console.log(1)
                this.messages.push(message);
            },

            handleIncomingMessage(message) {
                // if(this.selected_contact && message.from == this.selected_contact.id) {
                //     this.saveNewMessage(message);
                //     return;
                // }
                // alert(message.text);
                this.saveNewMessage(message);
         
            }
        }
    }
    
</script>
