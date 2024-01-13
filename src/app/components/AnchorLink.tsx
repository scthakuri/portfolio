import React from 'react'

export default function AnchorLink(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
    const { title, onClick, ...rest } = props;

    const smoothScroll = (e: any) => {
        e.preventDefault();

        let offset : number = 100;
        const id = e.currentTarget.getAttribute('href').slice(1)
        const anchorEle = document.getElementById(id);
        const offsetTop = anchorEle ? anchorEle.getBoundingClientRect().top + window.scrollY : 0;
        window.scroll({
            top: offsetTop - offset,
            behavior: 'smooth'
        })

        if (onClick) {
            onClick(e);
        }
    }

    return (
        <a {...rest} onClick={smoothScroll}>{props?.children}</a>
    )
}
