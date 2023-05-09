import { mapGetters } from "vuex";
import GitHubLogo from "@/assets/icons/github.svg?inline";
import TwitterLogo from "@/assets/icons/twitter.svg?inline";
import SlackLogo from "@/assets/icons/slack.svg?inline";

export default {
    components: {
        GitHubLogo,
        TwitterLogo,
        SlackLogo
    },
    computed: mapGetters({
        text: 'settings/textColor'
    }),
    props: {
        navType: { type: String, default: null },
        navList: { type: Array, default: null },
        scrolled: { type: Boolean, default: false }
    },
};
