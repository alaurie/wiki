# A05 ❯ Multimedia Codecs Installation Guide

## Enable EPEL

```Bash
sudo dnf -y install epel-release
sudo dnf makecache
```

## Enable CRB

```Bash
sudo dnf config-manager --set-enabled crb
```

## Add RPMFusion Free and NonFree

Starting from step 2, follow [Installing EPEL and RPM Fusion](/documentation/epel-and-rpmfusion/).

## Install multimedia codecs

```bash
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
sudo dnf -y group install multimedia
```

## Extra Audio packages

```bash
sudo dnf -y group install sound-and-video
```

## Play a DVD

```Bash
sudo dnf -y install libdvdcss
```

## Install mediaplayers like VLC, MPV or Celluloid from RPMFusion

```bash
sudo dnf install vlc
sudo dnf install mpv
sudo dnf install celluloid # Simple GTK+ frontend for mpv
```
