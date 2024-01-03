import type {LicenseConfig, NavBarConfig, ProfileConfig, SiteConfig} from "./types/config.ts";
import {LinkPreset} from "./types/config"

export const siteConfig: SiteConfig = {
    title: 'Leosouthey',
    subtitle: '莱奥斯的个人博客',
    lang: 'zh_CN',
    themeHue: 250,
    banner: {
        enable: true,
        src: 'assets/images/demo-banner.png',
    }
}

export const navBarConfig: NavBarConfig = {
    links: [
        LinkPreset.Home,
        LinkPreset.Archive,
        LinkPreset.About,
        {
            name: 'GitHub',
            url: 'https://github.com/leosouthey',
            external: true,
        }
    ]
}

export const profileConfig: ProfileConfig = {
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=22147493&spec=640&img_type=png',
    name: 'Leosouthey (莱奥斯)',
    bio: 'Time slows down when it can get no worse',
    links: [
        {
            name: 'QQ',
            icon: 'fa6-brands:qq',
            url: 'tencent://message/?uin=22147493&Site=qq&Menu=yes',
        },
        {
            name: 'Steam',
            icon: 'fa6-brands:bilibili',
            url: 'https://space.bilibili.com/270814359',
        },
        {
            name: 'GitHub',
            icon: 'fa6-brands:github',
            url: 'https://github.com/leosouthey',
        }
    ]
}

export const licenseConfig: LicenseConfig = {
    enable: true,
    name: 'CC BY-NC-SA 4.0',
    url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}