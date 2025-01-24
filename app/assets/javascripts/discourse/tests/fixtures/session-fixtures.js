import { AUTO_GROUPS } from "discourse/lib/constants";
import { deepFreeze } from "discourse/lib/object";

export default {
  "/session/current.json": deepFreeze({
    current_user: {
      id: 19,
      username: "eviltrout",
      uploaded_avatar_id: 5275,
      avatar_template: "/user_avatar/localhost/eviltrout/{size}/5275.png",
      name: "Robin Ward",
      unread_notifications: 0,
      unread_high_priority_notifications: 0,
      admin: true,
      notification_channel_position: null,
      site_flagged_posts_count: 1,
      moderator: true,
      staff: true,
      can_create_group: true,
      can_create_topic: true,
      title: "co-founder",
      reply_count: 859,
      topic_count: 36,
      trust_level: 4,
      can_edit: true,
      can_invite_to_forum: true,
      can_ignore_users: true,
      can_mute_users: true,
      can_send_private_messages: true,
      custom_fields: {},
      muted_category_ids: [],
      dismissed_banner_key: null,
      can_review: true,
      ignored_users: [],
      groups: [
        AUTO_GROUPS.admins,
        AUTO_GROUPS.moderators,
        AUTO_GROUPS.staff,
        AUTO_GROUPS.trust_level_0,
        AUTO_GROUPS.trust_level_1,
        AUTO_GROUPS.trust_level_2,
      ],
      user_option: {
        external_links_in_new_tab: false,
        enable_quoting: true,
        enable_smart_lists: true,
        dynamic_favicon: true,
        title_count_mode: "notifications",
        timezone: "Australia/Brisbane",
        skip_new_user_tips: false,
        should_be_redirected_to_top: false,
      },
      sidebar_sections: [
        {
          id: 111,
          title: "Community",
          section_type: "community",
          slug: "community",
          links: [
            {
              id: 329,
              name: "Topics",
              value: "/latest",
              icon: "layer-group",
              external: false,
              segment: "primary",
            },
            {
              id: 330,
              name: "Users",
              value: "/u",
              icon: "users",
              external: false,
              segment: "secondary",
            },
            {
              id: 331,
              name: "About",
              value: "/about",
              icon: "circle-info",
              external: false,
              segment: "secondary",
            },
            {
              id: 332,
              name: "Faq",
              value: "/faq",
              icon: "circle-question",
              external: false,
              segment: "secondary",
            },
            {
              id: 333,
              name: "My Posts",
              value: "/my/activity",
              icon: "user",
              external: false,
              segment: "primary",
            },
            {
              id: 334,
              name: "Review",
              value: "/review",
              icon: "flag",
              external: false,
              segment: "secondary",
            },
            {
              id: 335,
              name: "Admin",
              value: "/admin",
              icon: "wrench",
              external: false,
              segment: "primary",
            },
            {
              id: 336,
              name: "Groups",
              value: "/g",
              icon: "user-group",
              external: false,
              segment: "secondary",
            },
            {
              id: 337,
              name: "Badges",
              value: "/badges",
              icon: "certificate",
              external: false,
              segment: "secondary",
            },
            {
              id: 338,
              name: "Invite",
              value: "/new-invite",
              icon: "paper-plane",
              external: false,
              segment: "primary",
            },
          ],
        },
      ],
    },
  }),
};
