<template>
    <div class="card-body">

        <div class="direct-chat-messages" v-if="selectedContact.id">

            <div v-if="messages">
                <div class="direct-chat-msg" v-for="message in messages" v-bind:key="message.id" :class="message.to==selectedContact.id?'right':''">
                    <img class="direct-chat-img" v-if="message.to!=selectedContact.id" :src="selectedContact.profile_image" alt="user image">
                    <img class="direct-chat-img" v-else :src="currentUser.profile_image" alt="user image">
                    <div class="direct-chat-text" @click="toggle_message_time(message)">
                        {{message.text}}
                    </div>        
                    <div style="display:none;" class="direct-chat-info clearfix" :id="'message_time'+message.id">
                        <span class="direct-chat-timestamp" :class="message.to==selectedContact.id?'float-left':'float-right'">{{message.created_at | message_time}}</span>
                    </div>    
                </div>   
            </div>

            <div v-else>
                <h4>No Messages Yet</h4>
            </div>               
        </div>

    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('MessageFeed Component mounted.')
        },

        props: {
            messages: {
                type: Array,
                required: true,
            },
            currentUser: {
                type: Object
            },
            selectedContact: {
                type: Object
            }
        },

        methods: {
            toggle_message_time(message) {
                let id = "#message_time" + message.id;
                $(id).slideToggle();
            },
        },

        watch: {
            selectedContact(selectedContact) {
                
            }
        }


    }
</script>
<style scoped>

</style>
