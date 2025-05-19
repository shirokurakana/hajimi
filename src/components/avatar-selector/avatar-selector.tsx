import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'avatar-selector',
    styleUrl: 'avatar-selector.less',
    shadow: true,
})
export class AvatarSelector {
    @Event() selectAvatar: EventEmitter<string>;
    @State() selectedAvatar: string = '';

    private avatars = [
        {
            id: 'hajimi',
            name: '哈基米',
            url: '/assets/heads/hajimi.png'
        },
        {
            id: 'kyaru',
            name: '接头霸王',
            url: '/assets/heads/kyaru.png'
        },
        {
            id: 'doremi',
            name: '哆来咪',
            url: '/assets/heads/doremi.png'
        }
    ];

    private handleSelect(avatar: { id: string; url: string }) {
        console.log('Avatar selected:', avatar);
        this.selectedAvatar = avatar.id;
        this.selectAvatar.emit(avatar.url);
    }

    render() {
        return (
            <div class="avatar-selector">
                <h3>选择头像</h3>
                <div class="avatar-list">
                    {this.avatars.map(avatar => (
                        <div
                            class={`avatar-item ${this.selectedAvatar === avatar.id ? 'selected' : ''}`}
                            onClick={() => this.handleSelect(avatar)}
                        >
                            <img src={avatar.url} alt={avatar.name} />
                            <span>{avatar.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
} 