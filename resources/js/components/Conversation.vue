<template>
    <div>

        <div class="card direct-chat direct-chat-primary">

            <div class="card-header ui-sortable-handle">
                <h3 class="card-title" v-if="selectedContact.id">{{selectedContact.name}}</h3>
                <h3 class="card-title" v-else>No Contact Selected</h3>

                <div class="card-tools">
                  <span data-toggle="tooltip" title="3 New Messages" class="badge badge-primary">3</span>
                </div>
            </div>


           
            <MessageFeed :messages="messages" :currentUser="currentUser" :selectedContact="selectedContact"></MessageFeed>          
      
            <div class="card-footer">
                <MessageComposer @sendMessage="sendMessage"></MessageComposer>          
            </div>
            
        </div>

    </div>


</template>

<script>
    import MessageFeed from './MessageFeed.vue'
    import MessageComposer from './MessageComposer.vue'

    export default {
        components: {MessageFeed, MessageComposer},

        props: {
            messages: {
                type: Array,
                default: []
            },
            currentUser: {
                type: Object
            },
            selectedContact: {
                type: Object,
                default: null
            }
        },

        mounted() {
            console.log('Conversation Component mounted.')
        },

        methods: {
            sendMessage(messageContent){
                                        
                if(!this.selectedContact.id) {
                    return;
                }
                
                axios.post('api/messages/saveMessage', {
                    receiver_id: this.selectedContact.id,
                    messageContent: messageContent
                })
                .then((response) => {
                    this.$emit('new', response.data);
                    console.log(response.data);
                })
                .catch((error) => { 
                    console.log(error);
                })
            }
        }
    }
</script>

