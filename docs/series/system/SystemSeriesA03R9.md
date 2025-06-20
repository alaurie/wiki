# A03 R9 ❯ NVIDIA: Installation on 9.x

## 🌟 Introduction

This is a dedicated example for the AlmaLinux 9.x series, demonstrating how to install NVIDIA graphics driver using one of three variants:

* Variant I: Official NVIDIA Repository
* Variant II: ElRepo
* Variant III: RPMFusion

## 🔖 Variant I: Install Binary Driver

By default this installs the precompiled binary driver that matches the AlmaLinux kernel version. If you have installed an alternate kernel you will need to install the DKMS driver.

➡️  Enable EPEL and CRB

``` bash
sudo dnf -y install epel-release
sudo dnf config-manager --set-enabled crb
sudo dnf upgrade
```

➡️  Add NVIDIA Repository:

``` bash
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo
sudo dnf makecache
```

➡️  Install the latest pre-compiled binary NVIDIA driver:

``` bash
sudo dnf module install nvidia-driver:latest
```

➡️  Install the latest DKMS NVIDIA driver:

``` bash
sudo dnf module install nvidia-driver:latest-dkms
```

::: tip
If you do not want the latest driver, you can see the available drivers for install by running ```sudo dnf module list nvidia-driver```
:::

➡️  Install third-party libraries for CUDA:

``` bash
sudo dnf install freeglut-devel libX11-devel libXi-devel libXmu-devel make mesa-libGLU-devel freeimage-devel
```

## 🔖 Variant II: ElRepo

::: tip
Installing ElRepo NVIDIA drivers on AlmaLinux 9 requires using ELRepo Mainline kernel.
:::

➡️ Enable EPEL and CRB:

``` bash
sudo dnf config-manager --set-enabled crb
sudo dnf makecache && sudo dnf -y install epel-release
sudo dnf makecache
```

➡️  Add ELRepo:

``` bash
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
sudo dnf -y install https://www.elrepo.org/elrepo-release-9.el9.elrepo.noarch.rpm
sudo dnf makecache
```

➡️  Enable ELRepo Mainline Kernel Repo:

``` bash
sudo dnf config-manager --set-enabled elrepo-kernel
sudo dnf makecache
```

➡️  Install ELrepo Mainline kernel:

``` bash
sudo dnf -y install kernel-ml kernel-ml-modules kernel-ml-modules-extra kernel-ml-devel kernel-headers
```

➡️  Add NVIDIA repository:

``` bash
sudo dnf config-manager --add-repo https://developer.download.nvidia.com/compute/cuda/repos/rhel9/x86_64/cuda-rhel9.repo
sudo dnf makecache
```

➡️  Install NVIDIA DKMS Drivers:

``` bash
sudo dnf module install nvidia-driver:latest-dkms
```

➡️  Disable Nouveau:

``` bash
printf 'blacklist nouveau\n' | sudo tee /etc/modprobe.d/nouveau-blacklist.conf
sudo dracut -f --regenerate-all
lsmod | grep -Ei '(nouv|nvidia)'
```

➡️  Reboot to runlevel 3:

``` bash
sudo systemctl set-default multi-user.target
sudo reboot
sudo systemctl set-default graphical.target
sudo reboot
```

## 🔖 Variant III: RPMFusion

The RPM Fusion repository provides NVIDIA drivers with akmod-nvidia, which automatically builds kernel modules for your installed kernel versions. This is ideal for systems with frequent kernel updates.

➡️ Enable EPEL and CRB:

``` bash
sudo dnf config-manager --set-enabled crb
sudo dnf makecache && sudo dnf -y install epel-release
sudo dnf makecache
```

➡️ Enable RPM Fusion:

``` bash
sudo dnf -y install https://download1.rpmfusion.org/free/el/rpmfusion-free-release-9.noarch.rpm
sudo dnf -y install https://download1.rpmfusion.org/nonfree/el/rpmfusion-nonfree-release-9.noarch.rpm
sudo dnf makecache
```

➡️ Install NVIDIA driver with Akmod:

``` bash
sudo dnf -y install akmod-nvidia xorg-x11-drv-nvidia-cuda
```

::: tip
The akmod-nvidia package builds the NVIDIA kernel module dynamically, while xorg-x11-drv-nvidia-cuda includes CUDA support. The build process may take a few minutes after installation.
:::

➡️ Reboot:

``` bash
sudo reboot
```

## 📚 Further Reading and Next Steps

<u>Get Back:</u>

* AlmaLinux System Series ❯ [NVIDIA Driver Installation Guide](SystemSeriesA03.md)

<u>In-depth Resources:</u>

* AlmaLinux System Series ❯ [NVIDIA: Installation on 8.x](SystemSeriesA03R8.md)

<u>Related Resources:</u>

* AlmaLinux Nginx Series ❯ [A Beginner's Guide](../nginx/NginxSeriesA01.md)
* AlmaLinux Firewalld Series ❯ [A Beginner's Guide](SystemSeriesA0.md)
